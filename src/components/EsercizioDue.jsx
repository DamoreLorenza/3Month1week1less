import { Component } from "react";



class ImageComponent extends Component{

render(){

return <img src={this.props.Src} alt={this.props.Alt} />

}

}

export default ImageComponent