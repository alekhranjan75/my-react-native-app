import React from 'react'
import { Card } from 'react-native-elements';
import { Text, View, FlatList } from 'react-native';

const RenderDishComment = (props) => {
    const renderCommentItem = ({item, index}) => {
            return (
                <View key={index} style={{margin: 10}}>
                    <Text style={{fontSize: 14}}>{item.comment}</Text>
                    <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                    <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
                </View>
                );
        };
    return (
        <Card title='Comments' >
            <FlatList 
                data={props.comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

export default RenderDishComment