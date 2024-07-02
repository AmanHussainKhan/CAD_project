import React from 'react'

function TestApi() {

 
    const handleUnpleasantAPI = async () => {
     
        await API.get()
        
          .then((res) => {
          
          })
          .catch((err) => {
            
          });
      };

  return (
    <div>

    </div>
  )
}

export default TestApi