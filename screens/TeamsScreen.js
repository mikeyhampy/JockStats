import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

//Screen One
const ProfilePage = ({navigation, route}) => {

  
  const GoToCreateTeam = () => {
    navigation.navigate('Create Team', {"profileCount": route.params.profileCount});
  };

  const profile = () => {
    navigation.navigate('Team', 
    {"teamName": route.params.teamName, "sport": route.params.sport, "profileCount": route.params.profileCount})
  }

  const deleteProfile = () => {
    navigation.navigate('Team Page', {"teamName": "", "sport": "", "profileCount": route.params.profileCount-=1});
  }

  const adjustStats = () => {
    navigation.navigate('Adjust Stats', {"teamName": route.params.teamName, "sport": route.params.sport, 'goals': route.params.goals, 'saves': route.params.saves, 'faced': route.params.faced, 'profileCount': route.params.profileCount})
  }

  if (route.params.profileCount == 0) {

    return (
        <View style={styles.Page}>
            <Button onPress={() => GoToCreateTeam()} title="Create Team Profile"></Button>
        </View>
        );
  }
    else {
        return (
            <View style={styles.Page}>
            <Text style={{textDecorationLine: 'underline', fontSize: 30}}>Team Name </Text> 
            <Text style={{fontSize: 25}}>{route.params.teamName}</Text>
            <Text style={{fontSize: 30, textDecorationLine: 'underline'}}>Sport Playing</Text> 
            <Text style={{fontSize: 25, paddingBottom:10}}>{route.params.sport}</Text>
            <Button title='Adjust Stats' onPress={() => adjustStats()}></Button>
            <View style={styles.SidebySide}>
            <Button title='Edit' onPress={() => profile()}></Button>
            <Button title='Delete' onPress={() => deleteProfile()}></Button>
            </View>
            </View>
        )
    }
  
};

//Screen Two
const CreateProfile = ({navigation, route}) => {
 
    const [teamName, setteamName] = useState('')
    const [sport, setsport] = useState('')

    const CreateProfile = () => {
        navigation.navigate('Team Page', 
        {"teamName": teamName, "sport": sport, "profileCount": route.params.profileCount+=1});
      };
    
  return (
    <View style={styles.Page}>
      <TextInput
        style={{height: 100}}
        textAlign= 'center'
        placeholder='Enter the name of the Team'
        onChangeText={(teamName) => {setteamName(teamName)}}
      />
      <TextInput
        style={{height: 100}}
        textAlign= 'center'
        placeholder='Which Sport'
        onChangeText={(sport) => {setsport(sport)}}
      />

      <Button onPress={() => CreateProfile()} title="Submit"></Button>
    </View>
  );
};

const Profile = ({route, navigation}) => {
  const [teamName, setteamName] = useState(route.params.teamName)
  const [sport, setsport] = useState(route.params.sport)

  const save = () => {
    navigation.navigate('Team Page', {"teamName": teamName, "sport": sport, "profileCount": route.params.profileCount})
  }
    
  return (
    <View style={styles.Page}>
    <Text style={{fontSize:20}}>Team Name:</Text>
    <TextInput onChangeText={setteamName} value={teamName}/>
    <Text style={{fontSize:20}}>Sport:</Text>
    <TextInput onChangeText={setsport} value={sport}/>
    <Button onPress={() => save()} title="Save"/>
    </View>
  );
};

const AdjustStats = ({navigation, route}) => {

  const [saves, setsaves] = useState(route.params.saves)
  const [goals, setgoals] = useState(route.params.goals)
  const [faced, setfaced] = useState(route.params.faced)

  const addSaves = () => {      
     setsaves(saves+1);
   };
   const subSaves = () => {      
    setsaves(saves-1);
  };
  const addGoals = () => {      
    setgoals(goals+1);
  };
  const subGoals = () => {      
    setgoals(goals-1);
  };
  const addFaced = () => {      
    setfaced(faced+1);
  };
  const subFaced = () => {      
    setfaced(faced-1);
  };
  const save = () => {
    navigation.navigate('Team Page', {"teamName": route.params.teamName, "sport": route.params.sport, 'saves': saves, 'goals': goals, 'faced': faced, 'profileCount': route.params.profileCount})
  }

  return (

    <View style={styles.Page}>
      <Text style={styles.addSubNumber}>Saves</Text>
      <TouchableOpacity style={styles.addButtonContainer} onPress={() => addSaves()}>
      <Text style={styles.subButtonText}>+</Text></TouchableOpacity>      
      <Text style={styles.addSubNumber}>{saves}</Text> 
      <TouchableOpacity style={styles.subButtonContainer} onPress={() => subSaves()}>
      <Text style={styles.subButtonText}>-</Text></TouchableOpacity> 
      <Text style={styles.addSubNumber}>Goals</Text>
      <TouchableOpacity style={styles.addButtonContainer} onPress={() => addGoals()}>
      <Text style={styles.subButtonText}>+</Text></TouchableOpacity>      
      <Text style={styles.addSubNumber}>{goals}</Text> 
      <TouchableOpacity style={styles.subButtonContainer} onPress={() => subGoals()}>
      <Text style={styles.subButtonText}>-</Text></TouchableOpacity> 
      <Text style={styles.addSubNumber}>Faced</Text>
      <TouchableOpacity style={styles.addButtonContainer} onPress={() => addFaced()}>
      <Text style={styles.subButtonText}>+</Text></TouchableOpacity>      
      <Text style={styles.addSubNumber}>{faced}</Text> 
      <TouchableOpacity style={styles.subButtonContainer} onPress={() => subFaced()}>
      <Text style={styles.subButtonText}>-</Text></TouchableOpacity>
      <Button onPress={() => save()} title="Save"></Button>
    </View>
  )
}

const App = () => {
  
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen name="Team Page" component={ProfilePage} 
        initialParams={{teamName:"", sport: "", profileCount: 0,
        saves: 0, goals: 0, faced: 0}} />
        <Stack.Screen name="Create Team" component={CreateProfile} />
        <Stack.Screen name="Team" component={Profile}/>
        <Stack.Screen name="Adjust Stats" component={AdjustStats}/>
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  Page: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'beige'
  },
  SidebySide: {
    flexDirection:"row",
    paddingBottom: 10,
    paddingTop: 10
  },
  DisplayProfile: {
    justifyContent: 'flex-start',
    alignContent: 'flex-end'
  },
  addButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 10,
    backgroundColor: '#056517',
},
  addButtonText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
},
// minus button
  subButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 13,
    backgroundColor: '#bf1029',
    
},
  subButtonText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
},
container: {
  flex: 1,
  alignContent: "space-between",
  // flexDirection: "row",
  // flexWrap: "wrap",
  // alignItems: 'center',
  // justifyContent: 'center',
  backgroundColor: 'beige',

},
addSubNumber: {
  borderRadius: 10,
  paddingVertical: 0,
  paddingHorizontal: 4,
  backgroundColor: "#fff",
  fontSize: 20,
},
addSubView: {
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection:'column',
  flex: .267,
},
addSubTitle: {
  // padding: 2,
  // backgroundColor: "#fff",
},
})

export default App; 