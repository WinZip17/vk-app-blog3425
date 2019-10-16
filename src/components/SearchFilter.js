import React from 'react';
import {
    FixedLayout,
    Group,
    Panel,
    PanelHeader,
    View, Switch, Cell, platform, IOS
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {connect} from "react-redux";
import {
    activeCategoryAC,
    activeStoryAC, activeViewAC,
    onChangeFilterCategoryAC, onChangeSearchAC, searchMovieThunkCreator,
    setCamripAC, setGenresAC,
    setOrderAC,
    setSortAC,
    setTypesAC
} from "../reducers/MainReducer";
import EpicMenu from "./EpicMenu";
import HeaderButton from "@vkontakte/vkui/dist/es6/components/HeaderButton/HeaderButton";
import Button from "@vkontakte/vkui/dist/es6/components/Button/Button";
import FormLayout from "@vkontakte/vkui/dist/es6/components/FormLayout/FormLayout";
import Select from "@vkontakte/vkui/dist/es6/components/Select/Select";
import FormLayoutGroup from "@vkontakte/vkui/dist/es6/components/FormLayoutGroup/FormLayoutGroup";
import Input from "@vkontakte/vkui/dist/es6/components/Input/Input";
import Div from "@vkontakte/vkui/dist/es6/components/Div/Div";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const SubSelect = (props) => {
    return (
            <Select placeholder="Выберите подкатегорию"  onChange={props.setTypesFilter} id='searchSubCategory' >
                {props.subCategory.map((category) => <option key={category.name} value={category.value}> {category.name} </option>)}
            </Select>
)
};

const osname = platform();

const DataSearchFilter = (props) => {

    return (
        <View id={props.id} activePanel="filter">
            <Panel id="filter">
                <PanelHeader
                    left={<HeaderButton onClick={() => {
                        props.setActiveView("content");
                        props.setActiveStory(null);
                        props.setActiveCategory(null);
                    }}>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
                    addon={<HeaderButton onClick={() => {
                        props.setActiveView("content");
                        props.setActiveStory(null);
                        props.setActiveCategory(null);
                    }}>Назад</HeaderButton>}
                    noShadow>
                    Фильтры
                </PanelHeader>
                <FixedLayout vertical="top">
                    <EpicMenu/>
                </FixedLayout>
                <Group  title="Поиск фильма">
                    <FormLayout>
                        <Input value={props.state.search} onChange={props.onChangeSearch} type="text"
                               placeholder="введите название фильма"/>
                        {props.state.search ? <Button size="xl" onClick={() => {
                            props.setTypes("search");
                            props.searchMovie(props.state.search);
                            props.setActiveView("content");
                            props.setActiveStory(null);
                            props.setActiveCategory(null);
                        }}>Найти</Button> : <Button size="xl" disabled>Найти</Button>}
                    </FormLayout>
                </Group>
                <Group title="Фильтры">
                    <FormLayout>
                        <FormLayoutGroup>
                            <Select top="Категория" placeholder="Выберите категорию" id='searchCategory' onChange={props.onChangeFilterCategory} >
                                <option value="movie">Фильмы</option>
                                <option value="cartoons">Мультфильмы</option>
                                <option value="series">Сериалы</option>
                                <option value="anime">Аниме</option>
                            </Select>
                            {props.state.subCategory.length > 0 ? <SubSelect setTypesFilter={props.setTypesFilter} subCategory={props.state.subCategory}/> : <div></div>}
                            <Select top="Жанр" placeholder="выбирете жанр" onChange={props.setGenres}>
                                <option value="биография">биография</option>
                                <option value="боевик">боевик</option>
                                <option value="вестерн">вестерн</option>
                                <option value="военный">военный</option>
                                <option value="детектив">детектив</option>
                                <option value="драма">драма</option>
                                <option value="история">история</option>
                                <option value="комедия">комедия</option>
                                <option value="криминал">криминал</option>
                                <option value="мелодрама">мелодрама</option>
                                <option value="музыка">музыка</option>
                                <option value="мультфильм">мультфильм</option>
                                <option value="приключения">приключения</option>
                                <option value="семейный">семейный</option>
                                <option value="спорт">спорт</option>
                                <option value="триллер">триллер</option>
                                <option value="ужасы">ужасы</option>
                                <option value="фантастика">фантастика</option>
                                <option value="фэнтези">фэнтези</option>
                            </Select>
                            <Cell asideContent={<Switch   checked={props.state.nextListOptions.camrip} onChange={props.setCamrip}/>}>
                                Качество CamRip
                            </Cell>
                        </FormLayoutGroup>
                    </FormLayout>
                </Group>
                <Group title="Сортировка">
                    <FormLayout>
                        <FormLayoutGroup>
                            <Select top="Сортровка" placeholder="Сортировать по" onChange={props.setSort} >
                                <option value="updated_at">Дате обнофления</option>
                                <option value="year">Год фильма</option>
                                <option value="created_at">Дате добавления</option>
                            </Select>
                            <Select top="Направление сортировки" placeholder="Направление сортировки" onChange={props.setOrder} >
                                <option value="desc">По убыванию</option>
                                <option value="asc">По возрастанию</option>
                            </Select>
                        </FormLayoutGroup>
                    </FormLayout>
                </Group>
                <Div className='searchContainer'>
                    <Button size="xl" onClick={() => {
                        props.setActiveView("content");
                        props.setActiveStory(null);
                        props.setActiveCategory(null);
                    }}>Готово</Button>
                </Div>
            </Panel>

        </View>
    );
}


let mapStateToProps = (state) => {
    return {
        state: state.main
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setActiveView: (activeView) => {
            dispatch(activeViewAC(activeView))
        },
        setActiveStory: (activeStory) => {
            dispatch(activeStoryAC(activeStory))
        },
        setActiveCategory: (activeCategory) => {
            dispatch(activeCategoryAC(activeCategory))
        },
        setSort: (e) => {
            dispatch(setSortAC(e.currentTarget.value))
        },
        setOrder: (e) => {
            dispatch(setOrderAC(e.currentTarget.value))
        },
        setTypesFilter: (e) => {
            dispatch(setTypesAC(e.currentTarget.value))
        },
        setTypes: (types) => {
            dispatch(setTypesAC(types))
        },
        setCamrip: (e) => {
            dispatch(setCamripAC(e.currentTarget.checked))
        },
        onChangeSearch: (e) => {
            dispatch(onChangeSearchAC(e.currentTarget.value))
        },
        onChangeFilterCategory: (e) => {
            dispatch(onChangeFilterCategoryAC(e.currentTarget.value))
        },
        searchMovie: (title) => {
            dispatch(searchMovieThunkCreator(title))
        },
        setGenres: (e) => {
            dispatch(setGenresAC(e.currentTarget.value))
        },
    };
};


const SearchFilter = connect(mapStateToProps, mapDispatchToProps)(DataSearchFilter);


export default SearchFilter;
