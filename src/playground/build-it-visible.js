class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };

    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// NOT MY WAY

// let visibility = false;

// const handleToggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={handleToggleVisibility}>
//             {visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {visibility && (
//             <div>
//                 <p>Hey. These are some details you can now see!</p>
//             </div>
//         )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();




//  MY WAY

// const app = {
//     title: 'Visibility Toggle',
//     detailsShown: false,
//     buttonText: 'Show details',
//     textsForButton: ['Show details', 'Hide details'],
//     message: undefined
// };

// const onButtonClick = () => {
//     if (app.detailsShown) {
//         app.buttonText = app.textsForButton[0];
//         app.detailsShown = false;
//         app.message = undefined;
//     } else {
//         app.buttonText = app.textsForButton[1];
//         app.detailsShown = true;
//         app.message = <p>Hey. These are some details you can now see!</p>;
//     }
//     renderApp();
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1> 
//             <button onClick={onButtonClick}>{app.buttonText}</button>
//             {app.message}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// renderApp();