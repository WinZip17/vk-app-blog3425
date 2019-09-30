import React from 'react';
import {
    Group, Div,
    IS_PLATFORM_ANDROID, IS_PLATFORM_IOS, ModalPage, ModalPageHeader, ModalRoot, List, Cell, Switch, Panel
} from '@vkontakte/vkui';
import {connect} from "react-redux";
import {
    activeArticleAC,
    activeCategoryAC,
    activeFilterAC, activeModalAC, activeStoryAC,
    getFilmsListThunkCreator,
    heightAC, modalHistoryAC, setIframeUrlAC, setMoviesInfoAC, setSchemeAC,
    widthAC
} from "./reducers/MainReducer";
import Content from "./components/Content";
import connectVK from '@vkontakte/vk-connect';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import FormLayout from "@vkontakte/vkui/dist/es6/components/FormLayout/FormLayout";
import FormLayoutGroup from "@vkontakte/vkui/dist/es6/components/FormLayoutGroup/FormLayoutGroup";
import HeaderButton from "@vkontakte/vkui/dist/es6/components/HeaderButton/HeaderButton";
import Select from "@vkontakte/vkui/dist/es6/components/Select/Select";
import Button from "@vkontakte/vkui/dist/es6/components/Button/Button";
import Input from "@vkontakte/vkui/dist/es6/components/Input/Input";
import "./App.css"


const MODAL_PAGE_SEARCH = 'MODAL_PAGE_SEARCH';
const MODAL_PAGE_SETTINGS = 'MODAL_PAGE_SETTINGS';
const MODAL_PAGE_PLAY = 'MODAL_PAGE_PLAY';


class dataApp extends React.Component {

    componentDidMount() {
        connectVK.send('VKWebAppUpdateConfig', {});
        this.props.setWidth(window.innerWidth);
        this.props.setHeight(window.innerHeight);
        this.props.getFilmsList()
    }

    setActiveModal(activeModal) {
        activeModal = activeModal || null;
        let modalHistory = this.props.main.modalHistory ? [...this.props.main.modalHistory] : [];
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
        this.setActiveModal(this.props.main.modalHistory[this.props.main.modalHistory.length - 2]);
    };


    render() {
        const modal = (
            <ModalRoot activeModal={this.props.main.activeModal}>
                <ModalPage
                    id={MODAL_PAGE_SEARCH}
                    onClose={() => {
                        this.modalBack()
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
                            Фильтры
                        </ModalPageHeader>
                    }
                >
                    <FormLayout>
                        <FormLayoutGroup>
                            <Input
                                type="text"
                                top="Поиск по названию"
                                placeholder="Введите название фильма"
                                name="search"
                            />
                            <Button size="xl">Найти</Button>
                        </FormLayoutGroup>
                        <FormLayoutGroup>
                            <Select top="Категория" placeholder="Выберите категорию">
                                <option value="films">Фильмы</option>
                                <option value="cartoons">Мультфильмы</option>
                                <option value="series">Сериалы</option>
                                <option value="anime">Аниме</option>
                            </Select>
                        </FormLayoutGroup>
                        <FormLayoutGroup>
                            <Select top="Сортировать" placeholder="Выберите сортировку">
                                <option value="top">По рейтингу</option>
                                <option value="year">По дате</option>
                            </Select>
                        </FormLayoutGroup>
                        <FormLayoutGroup>
                            <Select top="Жанр" placeholder="Выберите жанр">
                                <option value="actionMovie">Боевик</option>
                                <option value="comedy">Комедия</option>
                            </Select>
                        </FormLayoutGroup>

                    </FormLayout>
                </ModalPage>

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
                                {/*<Cell asideContent={this.props.main.scheme ? <Switch defaultChecked  onChange={() => {this.props.setScheme(false)}} /> : <Switch onChange={() => {this.props.setScheme(true)}} />}>*/}
                                {/*    Темная тема*/}
                                {/*</Cell> */}
                                <Cell asideContent={<Switch id="scheme" checked={this.props.main.scheme} onChange={this.props.setScheme}/>}>
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
                                <iframe src={this.props.main.defaultIframeUrl} width="360" frameBorder="0"
                                        allowFullScreen></iframe>
                                <h1>{this.props.main.moviesInfo.title_ru}</h1>
                                {this.props.main.moviesInfo.year ? <p>Год: {this.props.main.moviesInfo.year}</p> : ""}
                                {this.props.main.moviesInfo.kinopoisk_id ? <p>Кинопоиск ID: {this.props.main.moviesInfo.kinopoisk_id}</p> : ""}
                                {this.props.main.moviesInfo.added_at ? <p>Добавлен: {this.props.main.moviesInfo.added_at}</p> : ""}
                            </Div>
                        </FormLayoutGroup>
                    </FormLayout>
                </ModalPage>


            </ModalRoot>
        );

        return (
            <div>
                <Content setActiveStory={this.props.setActiveStory} setActiveArticle={this.props.setActiveArticle}
                         setActiveFilter={this.props.setActiveFilter} setActiveCategory={this.props.setActiveCategory}
                         setActiveModal={this.props.setActiveModal} id="header" state={this.props.main} modal={modal}
                         setIframeUrl={this.props.setIframeUrl} setMoviesInfo={this.props.setMoviesInfo}/>

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
        setActiveModal: (activeModel) => {
            dispatch(activeModalAC(activeModel))
        },
        setModalHistory: (modalHistory) => {
            dispatch(modalHistoryAC(modalHistory))
        },
        setIframeUrl: (defaultIframeUrl) => {
            dispatch(setIframeUrlAC(defaultIframeUrl))
        },
        setMoviesInfo: (moviesInfo) => {
            dispatch(setMoviesInfoAC(moviesInfo))
        },
        setScheme: (scheme) => {
            dispatch(setSchemeAC(scheme.currentTarget.checked))
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
