import React, {Component, useEffect, useState} from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./CloudItem";
import './TagCloud.scss'

const styles = {
  large: {
    fontSize: 60,
    fontWeight: "bold"
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

const URL_BASE = 'https://d811e445999a.ngrok.io'

const TagCloudComp = (props) => {
    const [words, setWords] = useState([])
    const dia = useState(new Date().getDate())
    const mes = useState(new Date().getMonth())
    const year = useState(new Date().getFullYear())
    const [bestTweet, setBestTweet] = useState(null)
    const diaok = dia && dia[0]
    const mesok = mes && mes[0]
    const yearok = year && year[0]
    // console.log(<Moment
    //                                             format="MMM DD YYYY">{moment.utc(fecha).locale('es')}</Moment>)

    useEffect(() => {

        async function getKeywordsScore(diaok, mesok, yearok) {
            const request = await fetch(`${URL_BASE}/tweet/get_keyword_scores/${yearok}-10-${diaok}`, {

                method: 'GET'
            });

            const json = await request.json();
            setWords(json)
        }

        getKeywordsScore(diaok, mesok, yearok)

    }, [diaok, mesok, yearok])

     let data2 = []
    if (Array.isArray(words)) {
        for (let i = 1; i < words.length; i++) {
            data2.push( {
                name: words[i].word,
                IA: words[i].score
            })

        }
    }
    console.log(data2)
    return (
      <div className="app-outer">
        <div className="app-inner">
          <h1 className='tag-cloud-title'>Tag Cloud</h1>
          <TagCloud
            className="tag-cloud"
            rotate={() => Math.round(Math.random()) * 90}
            style={{
              fontFamily: "sans-serif",
              // fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () =>
                randomColor({
                  hue: "blue"
                }),
              padding: 5
            }}
          >
            <div
              style={{
                fontFamily: "serif",
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: "bold",
                color: randomColor()
              }}
            >
              Futurama
            </div>
            <CloudItem text="Custom item, Hover me!" />
            <CloudItem text="Custom item 2, Hover me!" />
              {/*{*/}
              {/*    Array.isArray(primero) && (*/}
              {/*        primero.map(key =>*/}
              {/*            <div style={styles.large}>*/}
              {/*                {primero.name}*/}
              {/*            </div>*/}
              {/*        )*/}
              {/*    )*/}
              {/*}*/}
            <div style={styles.large}>Caso</div>
            <div style={styles.large}>Respuesta</div>
            <div style={styles.large}>email</div>
            <div style={{ fontFamily: "courier" }}>empresa</div>
            <div style={{ fontSize: 30 }}>PandoraThalassa BBVA</div>
            <div style={{ fontStyle: "italic" }}>Siniestro</div>
            <div style={{ fontWeight: 200 }}>Disfrazado</div>
            <div style={{ color: "green" }}>BBVA_colombia</div>
            <div style={{ color: "green" }}>BBVA</div>
            <div style={{ color: "green" }}>gol</div>
            <div style={{ color: "green" }}>disfrazado</div>
            <div style={{ color: "green" }}>amaño</div>
            <div className="tag-item-wrapper">
              <div>Hover Me Please!</div>
              <div className="tag-item-tooltip">HOVERED!</div>
            </div>
            <div>APlicacion</div>
            <div>colmo</div>
            <div>detalles</div>
            <div>cuenta</div>
            <div>Benet Salellenas</div>
            <div>Hafta</div>
            <div>ejemplo</div>
            <div>plataforma</div>
            <div>ingresos</div>
            <div>como</div>
            <div>BBVA_mex</div>
            <div>panellets</div>
            <div>hijos</div>
          </TagCloud>
        </div>
      </div>
    );
}

export default TagCloudComp;