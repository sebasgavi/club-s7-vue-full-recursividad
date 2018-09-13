
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
    template: `
    <li v-if="visible">
        <a href="#" v-html="highlight"></a>
        <Lista v-bind:elementos="info.children" :busqueda="busqueda"></Lista>
    </li>
    `
});

var app = new Vue({
    el: '#app',
    data: {
        busqueda: '',
        paises: lista,
    },
    template: `
    <div>
        <h1>Buscador de lugares</h1>

        <input v-model="busqueda">
        <p>{{ busqueda }}</p>
        
        <Lista v-bind:elementos="paises" :busqueda="busqueda"></Lista>
    </div>
    `
});