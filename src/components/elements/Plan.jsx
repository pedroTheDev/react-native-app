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
          <Text style={styles.itens}>{element.phonePrice}</Text>
          <Text style={styles.itens}>Mensalidade total do Plano</Text>
          <Text style={styles.itens}>{element.monthly_fee}</Text>
          <Text style={styles.itens}>Pre Pago* - À vista</Text>
          <Text style={styles.itens}>{element.phonePriceOnPlan}</Text>
        </View>
      </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#dedede',
    margin:20,
  },
  titleText:{
    margin:15,
    height: '1rem',
    fontSize:18,
    fontWeight:'bold',
  },
  content:{
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    backgroundColor:'#fff',
    margin:10,
    padding:0,
  },
  itens:{
    border: '1px solid #dedede',
    margin:0,
    fontSize:15,
  },

})


//"name":"Controle 2GB",
    //"phonePrice":2899,
    //"phonePriceOnPlan":2229,
    //"installments":12,
    //"monthly_fee":44,
