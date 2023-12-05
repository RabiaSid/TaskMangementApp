import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import rncStyles from 'rncstyles';
import TaskCard from '../../components/card/task-card';
import {fbGet} from '../../config/firebase/firebase-methods';
import InputField from '../../components/input';
import IconButton from '../../components/icon';

export default function Task({navigation}: any) {
  const [model, setModel] = useState<any>([]);
  const [filterList, setFilterList] = useState<any>([]);

  const GetTask = () => {
    fbGet('task')
      .then((res: any) => {
        setModel([...res]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    //   // Screen was focused
    //   // Do something
    // });

    // return unsubscribe;
    GetTask();
  }, []);

  return (
    <View style={rncStyles.p1}>
      <InputField
        placeholder="Search"
        onChangeText={(e: any) => {
          let arr: any = model.filter((x: any) => {
            // if(e!){
            //   setFilterList([])
            //   return
            // }
            if (x.title.toLowerCase().includes(e.toLowerCase())) {
              return x;
            } else if (x.task.toLowerCase().includes(e.toLowerCase())) {
              return x;
            }
          });
          setFilterList([...arr]);
        }}
      />
      <ScrollView>
        {filterList.length > 0
          ? filterList.map((x: any, i: any) => (
              <TaskCard key={i} title={x.title} task={x.task}>
                <View style={rncStyles.flexRow}>
                  <IconButton
                    name="delete"
                    onPress={() => {
                      navigation.navigate('SingleTask', x);
                    }}
                  />
                  <IconButton
                    name="info"
                    onPress={() => {
                      navigation.navigate('SingleTask', x);
                    }}
                  />
                </View>
              </TaskCard>
            ))
          : model.map((x: any, i: any) => (
              <TaskCard key={i} title={x.title} task={x.task}>
                <View style={rncStyles.flexRow}>
                  <IconButton
                    name="delete"
                    onPress={() => {
                      navigation.navigate('SingleTask', x);
                    }}
                  />
                  <IconButton
                    name="info"
                    onPress={() => {
                      navigation.navigate('SingleTask', x);
                    }}
                  />
                </View>
              </TaskCard>
            ))}
      </ScrollView>
    </View>
  );
}
