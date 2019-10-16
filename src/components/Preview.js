import React from 'react';
import {
    FixedLayout,
    Panel,
    PanelHeader,
    View, platform, IOS, Div
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {connect} from "react-redux";
import {
     activeViewAC
} from "../reducers/MainReducer";
import EpicMenu from "./EpicMenu";
import HeaderButton from "@vkontakte/vkui/dist/es6/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';


const osname = platform();


// для информации, которая в material_data
const viewMaterialDataInfo = (moviesInfo, text, name) => {


    if ("material_data" in moviesInfo && name in moviesInfo.material_data) {

        if (typeof(moviesInfo.material_data[name]) === "object") {
            return <div className='previewHeadingParam'><div className='previewHeadingText'> {text}</div> <div className='previewHeadingInfoText'>{moviesInfo.material_data[name].join(', ')}</div></div>
        }
            return <div className='previewHeadingParam'><div className='previewHeadingText'> {text}</div> <div className='previewHeadingInfoText'>{moviesInfo.material_data[name]}</div></div>
    }
};

// информация о фильме в корне объкта
const viewInfo = (moviesInfo, text, name) => {
    if (name in moviesInfo && moviesInfo[name]) {
        if (typeof(moviesInfo[name]) === "object") {
            return <div className='previewHeadingParam'><div className='previewHeadingText'> {text}</div> <div className='previewHeadingInfoText'>{moviesInfo[name].join(', ')}</div></div>
        }
        return <div className='previewHeadingParam'><div className='previewHeadingText'> {text}</div> <div className='previewHeadingInfoText'>{moviesInfo[name]}</div></div>
    }
};



const DataPreview = (props) => {
    const poster = "material_data" in props.state.moviesInfo  && "poster_url" in props.state.moviesInfo.material_data ? props.state.moviesInfo.material_data.poster_url || "../img/defaultPoster.png" : "../img/defaultPoster.png";
    const style = {background: `url(${poster}) no-repeat`, "backgroundPosition": "center center", "backgroundSize": "cover"};
    console.log(props.state.blockList.includes(props.state.moviesInfo.title.toUpperCase()));
    return (
        <View id={props.id} activePanel="movie">
            <Panel id="movie">
                <PanelHeader
                    left={<HeaderButton onClick={() => {
                        props.setActiveView("content")
                    }}>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
                    addon={<HeaderButton onClick={() => {
                        props.setActiveView("content")
                    }}>Назад</HeaderButton>}
                    noShadow>
                    Просмотр
                </PanelHeader>
                <FixedLayout vertical="top">
                    <EpicMenu/>
                </FixedLayout>
                <div className='divPreview'>
                    {/*<iframe src={props.state.defaultIframeUrl} width="360" frameBorder="0"*/}
                    {/*        allowFullScreen title='play'></iframe>*/}
                    {props.state.blockList.includes(props.state.moviesInfo.title.toUpperCase()) ?
                        <div className="errorShell"> Видео удалено</div>
                        : <div className="buttonShell" style={style}>
                            <a href={props.state.defaultIframeUrl} className='buttonPlay'>Смотреть фильм</a>
                        </div>
                    }

                    <div>
                        <h1>{props.state.moviesInfo.title}</h1>
                        <div className='previewDivMovieInfo'>
                            {viewMaterialDataInfo(props.state.moviesInfo, "Рейтинг на КиноПоиске", "kinopoisk_rating")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Рейтинг на IMDb", "imdb_rating")}
                            {viewInfo(props.state.moviesInfo, "Название", "title_orig")}
                            {viewInfo(props.state.moviesInfo, "Год", "year")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Жанр", "genres")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Страна", "countries")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Режисер", "directors")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Сценарий", "writers")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Время", "duration")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Дата премьеры в России", "premiere_ru")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Дата премьеры в мире", "premiere_world")}
                            {viewMaterialDataInfo(props.state.moviesInfo, "Актеры", "actors")}

                            {"material_data" in props.state.moviesInfo && 'description' in  props.state.moviesInfo.material_data && props.state.moviesInfo.material_data.description.length >0? <p>{props.state.moviesInfo.material_data.description}</p>: ""}

                        </div>
                        {/*{props.state.moviesInfo.created_at ? <p>Добавлен: {props.state.moviesInfo.created_at.slice(0,10)}</p> : ""}*/}
                    </div>
                </div>
                {/*<div id="vk_comments"></div>*/}

            </Panel>
        </View>
    )
};


let mapStateToProps = (state) => {
    return {
        state: state.main
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setActiveView: (activeView) => {
            dispatch(activeViewAC(activeView))
        }

    };
};



const Preview = connect(mapStateToProps, mapDispatchToProps)(DataPreview);



export default Preview;
