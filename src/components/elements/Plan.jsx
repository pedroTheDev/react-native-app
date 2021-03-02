import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import PlanContext from '../../context/PlanContext';

export default function Plan() {

    const{ info } = useContext(PlanContext);
    console.log(info)

    function dateFormatter(date){
      return new Date(date) < today;
    }
    const today = new Date()
    const obj={};

    const newData = info.plans.filter((element) => dateFormatter(element.schedule.startDate))
                              .sort((a, b) => ((new Date(b.schedule.startDate)) - (new Date(a.schedule.startDate))))
                              .sort((c, d) => d.localidade.prioridade - c.localidade.prioridade)
                              .filter((item, i) => {
                                let exists = obj.hasOwnProperty(item.name)
                                return exists ? false : obj[item.name] = 1
                              })
    console.log((newData))

    
  
  return (
    <View style={styles.container}>
      {newData.map((element) =>
      <View>
        <Text style={styles.titleText}>{element.name}</Text>
        <View style={styles.content}>
          <Text style={styles.itens}>Pós Pago - À vista</Text>
          <Text style={styles.itensNumber}>{`R$${element.phonePrice.toFixed(2)}`}</Text>
          <Text style={styles.itens}>Mensalidade total do Plano</Text>
          <Text style={styles.itensNumber}>{`R$${element.monthly_fee.toFixed(2)}`}</Text>
          <Text style={styles.itens}>Pré Pago* - À vista</Text>
          <Text style={styles.itensNumber}>{`R$${element.phonePriceOnPlan.toFixed(2)}`}</Text>
        </View>
      </View>
      )}
      <Text style={styles.obs}>
        Oferta sujeita a permanência mínima de 12 meses. Consulte
        regulamento e periodo de fidelização. Parcelamento em até
        12 vezes sem juros, válido para pagamento com cartão de
        crédito. Chip (R$12,00) não incluso no valor do aparelho.
        Oferta sujeita à análise de crédito.<br/>
        *Valor do aparelho avulso.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#dedede',
    borderRadius: 5,
    marginTop: 5,
    margin: 20,
    height: '80%',
  },
  titleText:{
    margin:15,
    height: '1rem',
    fontSize:20,
    fontWeight:'bold',
  },
  content:{
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    backgroundColor:'#fff',
    margin:10,
    padding:0,
    alignItems: 'center',
  },
  itens:{
    border: '1px solid #dedede',
    margin:0,
    fontSize:15,
    height:40,
    alignItems: 'center',
    paddingTop:8,
    paddingLeft: 8,
  },
  itensNumber:{
    border: '1px solid #dedede',
    margin:0,
    fontSize:15,
    height:40,
    textAlign: 'center',
    color:'#5396ed',
    paddingTop:8,
  },
  obs: {
    margin:10,
    fontSize:11,
    textAlign:'justify',



  },

})


//"name":"Controle 2GB",
    //"phonePrice":2899,
    //"phonePriceOnPlan":2229,
    //"installments":12,
    //"monthly_fee":44,
