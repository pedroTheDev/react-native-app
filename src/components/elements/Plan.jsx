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
        <View>
          <Text>Pós Pago - À vista</Text>
          <Text>{element.phonePrice}</Text>
          <Text>Mensalidade total do Plano</Text>
          <Text>{element.monthly_fee}</Text>
          <Text>Pre Pago* - À vista</Text>
          <Text>{element.phonePriceOnPlan}</Text>
        </View>
      </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#dedede',
    margin:30,
    height: '20rem',
  },
  titleText:{
    margin:15,
    height: '1rem',
    fontSize:18,
    fontWeight:'bold',
  },

})


//"name":"Controle 2GB",
    //"phonePrice":2899,
    //"phonePriceOnPlan":2229,
    //"installments":12,
    //"monthly_fee":44,
