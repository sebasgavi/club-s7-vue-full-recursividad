
function contieneLaBusqueda(elemento, busqueda){
    return elemento.name.toLowerCase()
                .indexOf(busqueda.toLowerCase()) >= 0 
            || ( elemento.children && 
            elemento.children.some((e) => {
                return contieneLaBusqueda(e, busqueda);
            }) );
}


Vue.component('Lista', {
    props: ['elementos', 'busqueda'],
    template: `
    <ul>
        <Elemento v-for="elem in elementos" v-bind:info="elem" :busqueda="busqueda" :key="elem.name"></Elemento>
    </ul>
    `
});

Vue.component('Elemento', {
    props: ['info', 'busqueda'],
    computed: {
        visible: function(){
            return contieneLaBusqueda(this.info, this.busqueda);
        }, 
        highlight: function(){
            let n = this.info.name;
            let s = this.busqueda;
            let i = n.toLowerCase().indexOf(s.toLowerCase());
            if(i < 0) return n;

            let a = n.substring(0, i);
            let b = n.substring(i, i + s.length);
            let c = n.substring(i + s.length);
            return `${a}<span style="background:yellow">${b}</span>${c}`;
        }
    },
    methods: {
        elementClicked: function(event){
            console.log(this.info)
            app.seleccionado = this.info;
        }
    },
    template: `
    <li v-if="visible">
        <a href="#" v-html="highlight" v-on:click="elementClicked"></a>
        <Lista v-bind:elementos="info.children" :busqueda="busqueda"></Lista>
    </li>
    `
});


var { LMap, LTileLayer, LMarker } = Vue2Leaflet;
Vue.component('Map', {
    props: ['info'],
    components: { LMap, LTileLayer, LMarker },
    computed: {
        zoom: function() { return this.info.zoom; },
        center: function() { return L.latLng(this.info.location[0], this.info.location[1]); },
        marker: function() { return L.latLng(this.info.location[0], this.info.location[1]); },
    },
    data: function(){
        return {
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }
    },
    template: `
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        busqueda: '',
        paises: lista,
        seleccionado: null,

        stylesMain: {
            display: 'flex'
        },
        stylesMap: {
            background: 'red',
            flex: '1 1 auto'
        }
    },
    template: `
    <div :style="stylesMain">
        <section>
            <h1>Buscador de lugares</h1>

            <input v-model="busqueda">
            <p>{{ busqueda }}</p>
            
            <Lista v-bind:elementos="paises" :busqueda="busqueda"></Lista>
        </section>
        <section :style="stylesMap">
            <Map v-if="seleccionado" :info="seleccionado"></Map>
        </section>
    </div>
    `
});