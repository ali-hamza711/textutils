import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("You have clicked on Up click");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }
    
    const handleDownClick = ()=>{
        // console.log("You have clicked on Up click");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");

    }

    const handleCapitalizeClick = ()=>{
      let camelCaseText = text.split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0)
          .toUpperCase() + word.slice(1)
          .toLowerCase();
      })
      .join(' ');
    setText(camelCaseText);
    props.showAlert('Converted to capitalize', 'success');
    }


  const handleExtraSpaces = ()=>{
    // console.log("You have clicked on Up click");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
}

    const handleClearClick = ()=>{
        // console.log("You have clicked on Up click");
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared", "success");

    }

    const handleCopy = ()=>{
      // console.log("You have clicked on Up click");
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copy to clipboard", "success");

  }
    
    const handleOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
        
    }
    const [text, setText] = useState('');
    // text = "adfasdga"; // Wrong way to update state variable
    // setText("new Text");  // correct way to change the state
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
                  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" style={{backgroundColor: props.mode === 'dark'?'#212140':'white', color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Capitalize Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{text.split(" ").length * 0.008} Minutes Read</p>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in the above text box to preview here"}</p>
      </div>
    </>
  )
}
