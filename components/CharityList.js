import React, { Component, useState, useEffect } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CharityCell from './CharityCell'
import Filter from './Filter'

const CharityList = ({charities}) => {
    const [tagFilter, setTagFilter] = useState([]);
    const [filteredCharities, setFilteredCharities] = useState(charities.filter(charity => charity.tags.some(tag => tagFilter.includes(tag))))
    
    useEffect(() => {
        if (tagFilter.length > 0) {
            setFilteredCharities(charities.filter(charity => charity.tags.some(tag => tagFilter.includes(tag))))
        } else {
            setFilteredCharities(charities)
        }
    }, [tagFilter])

    return (
    <View>
        <Filter tagFilter={tagFilter} setTagFilter={setTagFilter}/>
        <View style={styles.CharityList}>
            {filteredCharities.length > 0 ? filteredCharities.map(charity => <CharityCell key={charity.name} name={charity.name} description={charity.description} distance={charity.distance} />) : <Text>"No Charities found"</Text>}
        </View>
    </View>)
};


const styles = StyleSheet.create({
    CharityList: {

    },
})

export default CharityList;
