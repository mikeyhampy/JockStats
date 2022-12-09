import React from 'react';
import { StyleSheet, Text, View, Pressable, Button, TouchableOpacity } from 'react-native';

global.Saves = "0";
global.Goals = "0";
global.Faced = "0";

function AddingSubbing(Title, addersubber) {
    if (Title == "Saves") {
        Saves = toString(Number(Saves) + addersubber)
    } else if (Title == "Goals") {
        Goals = toString(Number(Goals) + addersubber)
    } else if (Title == "Faced") {
        Faced = toString(Number(Faced) + addersubber)
    }
}

const AddButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.addButtonContainer}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );

const SubButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.subButtonContainer}>
      <Text style={styles.subButtonText}>-</Text>
    </TouchableOpacity>
  );

const SavesAddSub = ({Title = "Saves"}) => (
    <View style={styles.addSubView}>
        <Text style={styles.addSubTitle}>{Title}</Text>
        <AddButton onPress={AddingSubbing(Title, 1)}/>
        <Text style={styles.addSubNumber}>{Saves}</Text>
        <SubButton onPress={AddingSubbing(Title, -1)}/>
    </View>
);

const GoalsAddSub = ({Title = "Goals"}) => (
    <View style={styles.addSubView}>
        <Text style={styles.addSubTitle}>{Title}</Text>
        <AddButton onPress={AddingSubbing(Title, 1)}/>
        <Text style={styles.addSubNumber}>{Goals}</Text>
        <SubButton onPress={AddingSubbing(Title, -1)}/>
    </View>
);

const FacedAddSub = ({Title = "Faced"}) => (
    <View style={styles.addSubView}>
        <Text style={styles.addSubTitle}>{Title}</Text>
        <AddButton onPress={AddingSubbing(Title, 1)}/>
        <Text style={styles.addSubNumber}>{Faced}</Text>
        <SubButton onPress={AddingSubbing(Title, -1)}/>
    </View>
);


const PlayerScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Text>Player Screen</Text> */}
            {/* <AddButton/>
            <SubButton/> */}
            {/* <Button style={styles.subbutton} class="sub" type="button" title="-"/> rathion */}
            <SavesAddSub/>
            <GoalsAddSub/>
            <FacedAddSub/>
        </View>
    );

}



export default PlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "space-between",
        // flexDirection: "row",
        // flexWrap: "wrap",
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#8fcbbc',

    },

    // plus button
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
        backgroundColor: '#bf1029'
    },
    subButtonText: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

    // other items arround the buttons
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
    addSubNumber: {
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 4,
        backgroundColor: "#fff",
        fontSize: 20,
    }
});