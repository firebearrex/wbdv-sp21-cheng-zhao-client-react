import React from 'react'

const ewq = ['qu','wf','eh','iu','tb'];

const ewq2 = [28,107,26,65,95];

function Hello() {
  return (
      <ul>
        {
          ewq.map(rew => {
                return <li>{rew}</li>
              }
          )
        }
      </ul>
  )
}

function Test() {
  return (
      <ul>
        {
          ewq.filter(
              function(dsa){
                return dsa > 50
              })
              .map(
                  function(rew) {
                    return(
                        <li>{rew}</li>
                    )
                  })
        }
      </ul>
  )
}



export default Hello
