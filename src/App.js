import React from 'react';
import {
    Div,
    IS_PLATFORM_ANDROID, IS_PLATFORM_IOS, ModalPage, ModalPageHeader, ModalRoot, List, Cell, Switch, Root
} from '@vkontakte/vkui';
import {connect} from "react-redux";
import {
    activeModalAC,
    activeStoryAC, getAddMovieListThunkCreator,
    getMovieListThunkCreator,
    modalHistoryAC, onChangeListOptionsAC, setFetchingAC,
    setSchemeAC
} from "./reducers/MainReducer";
import Content from "./components/Content";
import connectVK from '@vkontakte/vk-connect';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import FormLayout from "@vkontakte/vkui/dist/es6/components/FormLayout/FormLayout";
import FormLayoutGroup from "@vkontakte/vkui/dist/es6/components/FormLayoutGroup/FormLayoutGroup";
import HeaderButton from "@vkontakte/vkui/dist/es6/components/HeaderButton/HeaderButton";
import "./App.css"
import SearchFilter from "./components/SearchFilter";


const MODAL_PAGE_SETTINGS = 'MODAL_PAGE_SETTINGS';
const MODAL_PAGE_PLAY = 'MODAL_PAGE_PLAY';

class dataApp extends React.Component {

    componentDidMount() {
        connectVK.send('VKWebAppUpdateConfig', {});
        this.props.getMovieList(this.props.state.currentListOptions);
        window.addEventListener('scroll', this.handleScroll)
    };

    componentDidUpdate() {
        if (this.props.state.isReady === null && JSON.stringify(this.props.state.currentListOptions) !== JSON.stringify(this.props.state.nextListOptions)) {
            this.props.onChangeListOptions(this.props.state.nextListOptions)
            this.props.getMovieList(this.props.state.nextListOptions);
        }
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }


    setActiveModal(activeModal) {
        activeModal = activeModal || null;
        let modalHistory = this.props.state.modalHistory ? [...this.props.state.modalHistory] : [];
        if (activeModal === null) {
            modalHistory = [];
            this.props.setActiveStory(null);
        } else if (modalHistory.indexOf(activeModal) !== -1) {
            modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
        } else {
            modalHistory.push(activeModal);
        }
        this.props.setActiveModal(activeModal);
        this.props.setModalHistory(modalHistory);
    };

    modalBack = () => {
        this.setActiveModal(this.props.state.modalHistory[this.props.state.modalHistory.length - 2]);
    };

    handleScroll = (e) => {
        let currentScroll = e.currentTarget.scrollY;
        let innerHeight = window.innerHeight;
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        if (innerHeight+currentScroll > scrollHeight*0.80 && this.props.state.fetching && innerHeight+1000 < currentScroll) {
            this.props.setFetching(false);
            this.props.getAddMovieList(this.props.state.next_page);
            console.log('конец близок');
        }
    }

    render() {
        const modal = (
            <ModalRoot activeModal={this.props.state.activeModal}>
                <ModalPage
                    id={MODAL_PAGE_SETTINGS}
                    onClose={() => {
                        this.modalBack();
                        this.props.setActiveStory(null)
                    }}
                    header={
                        <ModalPageHeader
                            left={IS_PLATFORM_ANDROID && <HeaderButton onClick={() => {
                                this.modalBack()
                            }}><Icon24Cancel/></HeaderButton>}
                            right={<HeaderButton onClick={() => {
                                this.modalBack()
                            }}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done/>}</HeaderButton>}
                        >
                            Настройки
                        </ModalPageHeader>
                    }
                >
                    <FormLayout>
                        <FormLayoutGroup top="Тема оформления">
                            <List>
                                <Cell asideContent={<Switch id="scheme" checked={this.props.state.scheme} onChange={this.props.setScheme}/>}>
                                    Темная тема
                                </Cell>
                            </List>
                        </FormLayoutGroup>
                    </FormLayout>
                </ModalPage>

                <ModalPage
                    className='MODAL_PAGE_PLAY'
                    id={MODAL_PAGE_PLAY}
                    onClose={() => {
                        this.modalBack();
                        this.props.setActiveStory(null)
                    }}
                    header={
                        <ModalPageHeader
                            left={IS_PLATFORM_ANDROID && <HeaderButton onClick={() => {
                                this.modalBack()
                            }}><Icon24Cancel/></HeaderButton>}
                            right={<HeaderButton onClick={() => {
                                this.modalBack()
                            }}>{IS_PLATFORM_IOS ? "" : <Icon24Done/>}</HeaderButton>}
                        >
                        </ModalPageHeader>
                    }
                >
                    <FormLayout>
                        <FormLayoutGroup>
                            <Div>
                                <iframe src={this.props.state.defaultIframeUrl} width="360" frameBorder="0"
                                        allowFullScreen title='play'></iframe>
                                <h1>{this.props.state.moviesInfo.title}</h1>
                                <p>Оригинальное название: <b>{this.props.state.moviesInfo.title_orig}</b></p>
                                {this.props.state.moviesInfo.year ? <p>Год: {this.props.state.moviesInfo.year}</p> : ""}
                                {this.props.state.moviesInfo.created_at ? <p>Добавлен: {this.props.state.moviesInfo.created_at.slice(0,10)}</p> : ""}
                                {"material_data" in this.props.state.moviesInfo && 'actors' in  this.props.state.moviesInfo.material_data && this.props.state.moviesInfo.material_data.actors.length >0? <p>Актеры: {this.props.state.moviesInfo.material_data.actors.join(', ')}</p>: ""}
                                {"material_data" in this.props.state.moviesInfo && 'genres' in  this.props.state.moviesInfo.material_data && this.props.state.moviesInfo.material_data.genres.length >0? <p>Жанр: {this.props.state.moviesInfo.material_data.genres.join(', ')}</p>: ""}
                                {"material_data" in this.props.state.moviesInfo && 'description' in  this.props.state.moviesInfo.material_data && this.props.state.moviesInfo.material_data.description.length >0? <p>Описание: {this.props.state.moviesInfo.material_data.description}</p>: ""}
                            </Div>
                        </FormLayoutGroup>
                    </FormLayout>
                </ModalPage>
            </ModalRoot>
        );

        return (
            <Root activeView={this.props.state.activeView}  >
                <Content  id="content" modal={modal}/>
                <SearchFilter id="search" modal={modal}/>
            </Root>
    )}
};



let mapStateToProps = (state) => {
    return {
        state: state.main
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setActiveStory: (activeStory) => {
            dispatch(activeStoryAC(activeStory))
        },
        setActiveModal: (activeModel) => {
            dispatch(activeModalAC(activeModel))
        },
        setModalHistory: (modalHistory) => {
            dispatch(modalHistoryAC(modalHistory))
        },
        setScheme: (scheme) => {
            dispatch(setSchemeAC(scheme.currentTarget.checked))
        },
        getMovieList: (listOptions) => {
            dispatch(getMovieListThunkCreator(listOptions));
        },
        onChangeListOptions: (nextListOptions) => {
            dispatch(onChangeListOptionsAC(nextListOptions))
        },
        setFetching: (fetching) => {
            dispatch(setFetchingAC(fetching))
        },
        getAddMovieList: (url) => {
            dispatch(getAddMovieListThunkCreator(url))
        },

    };
};

const App = connect(mapStateToProps, mapDispatchToProps)(dataApp);

export default App;
