import React, {Component} from 'react';

class DownloadPrompt extends Component {

    // downloadPrompt = ()  => {
    //     const element = document.createElement("a");
    //     const file = new Blob('hello', {type: 'text/plain'});
    //     element.href = URL.createObjectURL(file);
    //     element.download = "WriteNowPrompt.txt";
    //     document.body.appendChild(element); 
    //     element.click();
    // }


    render() {

            console.log(this.sentence)
        // console.log (this.downloadPromptText)

        return (
            <div className='DownloadPrompt'>
                <input 
                id="promptDownload" 
                defaultValue={this.sentence}
                /> 
                <button className="downloadButton">
                {/* // onClick={this.downloadPrompt}> */}
                {this.downloadPromptText}
                </button>
            </div>
        )
    }
}

export default DownloadPrompt;