// TODO: nice comment explaining where to find info on this file

var punditConfig = {

    debugAllModules: false,

    annotationServerBaseURL: 'http://as.thepund.it:8080/annotationserver/',

    vocabularies: [],

    useBasicRelations: true,

    modules: {
        
        'pundit.Help': {
            active: false
        },
        'pundit.NamedContentHandler': {
            active: false
        },
        
        'selectors': {},
        'annotators': {}
    }

};
