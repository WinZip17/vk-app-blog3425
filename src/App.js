import React from 'react';
import {
    Cell, FixedLayout,
    Group, HorizontalScroll, List,
    Panel, PanelHeader,
    Root, Tabs, TabsItem,
    View
} from '@vkontakte/vkui';
import Main from "./panels/Main";
import Cartoons from "./panels/Cartoons";
import {connect} from "react-redux";
import {
    activeArticleAC,
    activeCategoryAC,
    activeFilterAC, activeStoryAC,
    getFilmsListThunkCreator,
    heightAC,
    widthAC
} from "./reducers/MainReducer";
import Content from "./panels/Content";


class dataApp extends React.Component {
    componentDidMount() {
        this.props.setWidth(window.innerWidth);
        this.props.setHeight(window.innerHeight);
        // this.props.getFilmsList()
    }

    render() {
        debugger
    return (
        <div >
            <Content setActiveStory={this.props.setActiveStory} setActiveArticle={this.props.setActiveArticle} setActiveFilter={this.props.setActiveFilter} setActiveCategory={this.props.setActiveCategory} id="header" state={this.props.main} />

            {/*<Preview setActiveArticle={this.props.setActiveArticle} setActiveFilter={this.props.setActiveFilter}  state={this.props.main} id="preview"/>*/}
        </div>
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
        setActiveStory: (activeStory) => {
            dispatch(activeStoryAC(activeStory))
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
