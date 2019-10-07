let opened = window.open("");
opened.document.write("<iframe className='iframePreview' src={props.state.defaultIframeUrl} width=\"100%\" height=\"240\" frameBorder=\"0\"\n" +
    "                            allowFullScreen title='play'></iframe>");
