import React from 'react';
import {
    Cell,
    Group, List,
    Panel, PanelHeader,
    Root,
    View
} from '@vkontakte/vkui';
import Films from "./components/Main";
import Cartoons from "./components/Cartoons";
import {connect} from "react-redux";
import {
    activeArticleAC,
    activeCategoryAC,
    activeFilterAC,
    getFilmsListThunkCreator,
    heightAC,
    widthAC
} from "./reducers/MainReducer";
import Preview from "./components/Preview";


class dataApp extends React.Component {
    componentDidMount() {
        this.props.setWidth(window.innerWidth);
        this.props.setHeight(window.innerHeight);
        this.props.getFilmsList()
    }
    render() {
    return (
        <Root activeView={this.props.main.activeArticle} >
            <Films setActiveArticle={this.props.setActiveArticle} setActiveFilter={this.props.setActiveFilter} setActiveCategory={this.props.setActiveCategory} id="films" state={this.props.main} />
            <Preview setActiveArticle={this.props.setActiveArticle} setActiveFilter={this.props.setActiveFilter}  state={this.props.main} id="preview"/>
        </Root>
    )}
};



let mapStateToProps = (state) => {
    return {
        main: state.main
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setActiveArticle: (article) => {
            dispatch(activeArticleAC(article))
        },
        setActiveFilter: (activeFilter) => {
            dispatch(activeFilterAC(activeFilter))
        },
        setActiveCategory: (activeCategory) => {
            dispatch(activeCategoryAC(activeCategory))
        },
        setWidth: (width) => {
            dispatch(widthAC(width))
        },
        setHeight: (height) => {
            dispatch(heightAC(height))
        },
        getFilmsList: () => {
            dispatch(getFilmsListThunkCreator());
        },
    };
};

const App = connect(mapStateToProps, mapDispatchToProps)(dataApp);

export default App;
