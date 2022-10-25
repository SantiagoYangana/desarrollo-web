class country {
    constructor(country){
        this.flag = country.flag;
        this.name = country.name;
        this.region = country.region;
    }
}

const getCountry=async(name)=>{
    const uri = `https://restcountries.com/v2/name/${name}`;
    const resp = await fetch(uri);
    const data = await resp.json();
    let pais=new country(data[0]);
    // let {region}=pais;
    // let array =['chavo','quico', 'chilindrina'];
    // let [,,personaje3]=array;
    //console.log(pais);
    document.getElementById('pais_name').innerHTML = pais.name;
    document.getElementById('pais_flag').src = pais.flag;
    document.getElementById('pais_region').innerHTML = pais.region;

}
getCountry('España');

const $btn_search = document.getElementById('btn_search');
$btn_search.addEventListener('click',()=>{
    const $pais_input=document.getElementById('pais_input');
    getCountry($pais_input.value);
})
