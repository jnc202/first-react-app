import { Component} from "react";


class ToggleText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleOn: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = this.state.toggleOn;

        this.setState({ toggleOn: !current });
    }

    render() {
        const { initial, alternate } = this.props;
        let text = this.state.toggleOn ? alternate : initial;

        return (
            <>
                <p>{ text }</p>
                <button onClick={ this.handleClick } >Toggle</button>
            </>
        );
    }
}

export default ToggleText;