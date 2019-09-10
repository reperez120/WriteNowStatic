import React, {Component} from 'react';

class DownloadPrompt extends Component {

    downloadPrompt = () => {
        const element = document.createElement("a");
        const file = new Blob([this.props.sentence], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "WriteNowPrompt.txt";
        document.body.appendChild(element);
        element.click();
    }
   
    render() {

        return (
            <div className='DownloadPrompt'>
                <input 
                    id="promptDownload" 
                    defaultValue={this.props.sentence}
                /> 
                <button className="downloadButton" onClick={this.downloadPrompt}>
                    {this.props.downloadPromptText}
                </button>
            </div>
        )
    }
}

export default DownloadPrompt;