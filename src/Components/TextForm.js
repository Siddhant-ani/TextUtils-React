import React, { useState } from 'react';



export default function TextForm(props){
    const handleUpClick = ()=> {
        // console.log("uppecase was clicked: " + text)
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("text converted to Uppercase!" , "success");
    }
    const handleLoClick = ()=> {
        // console.log("uppecase was clicked: " + text)
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("text converted to Lowercase!" , "success");
    }
    const handleClearClick = ()=> {
        // console.log("uppecase was clicked: " + text)
        let newText = ''
        setText(newText);
        props.showAlert("text cleared!" , "success");
    }
    const handleCapClick = ()=> {
        // console.log("uppecase was clicked: " + text)
        let newText = text
        .split(" ")
        .map( text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
        .join(" ")
        setText(newText);
        props.showAlert("text capitalised!" , "success");
    }
    const handleCopyClick = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("text copied to clipboard!" , "success");

    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/).join(" ").trim()
        setText(newText);
        props.showAlert("extra spaces removed" , "success");
    }
    const handleOnChange = (event)=> {
        // console.log("On change")
        setText(event.target.value)
    }
    const handleConvertHtmlToJsx = () => {
        let rawHtml = text;
        let jsxText = rawHtml
            .replace(/class=/g, 'className=') // Convert 'class' to 'className'
            .replace(/for=/g, 'htmlFor=') // Convert 'for' to 'htmlFor'
            .replace(/<img[^>]*>/g, (match) => match.replace(/(\/?>)$/, ' />')) // Self-close <img> tags
            .replace(/<input[^>]*>/g, (match) => match.replace(/(\/?>)$/, ' />')) // Self-close <input> tags
            .replace(/<textarea[^>]*>/g, (match) => match.replace(/(\/?>)$/, ' />')); // Self-close <textarea> tags
        setText(jsxText);
    };

    // word count to zero at the start
    const [text , setText] = useState("");
    return (
        <>
        <div className = "container" style={{color: props.mode=== 'light'? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? 'grey':'white', color:props.mode=== 'light'? 'black':'white'} } id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button> 
            <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button> 
            <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear</button> 
            <button className="btn btn-primary mx-1" onClick={handleCapClick}> Caplitalise</button> 
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}> Copy Text</button> 
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Spaces</button> 
            <button className="btn btn-primary mx-1" onClick={handleConvertHtmlToJsx}> HTML to JSX</button> 
         </div>
         <div className="container my-4" style={{color: props.mode=== 'light'? 'black':'white'}}>
            <h2>Your Text Summary</h2>
            {/* <p>{text.split(" ").length} words and {text.length} Characters</p> */}
            {/* <p>{text.split(" ").filter(word => word.trim() !== "").length} words, {text.length} Characters</p> */}
            <p>{0.008 * text.split(" ").length} minutes to read </p>
            <h3>Preview</h3>
            <p> {text.length > 0 ? text : "Enter something above to Preview it here"} </p>
         </div>
         </>
    )
}