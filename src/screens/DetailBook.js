import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body ,Left, Right, Title,Button,Icon,  } from 'native-base';
import { Alert} from 'react-native'

import { connect } from 'react-redux'
import { getColor,postKategori } from '../public/redux/actions/kategori'
import Data from '../Data/Note'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: props.navigation.getParam('data'),
    }
  }
  
  delete =() => {

    Data.splice( (this.state.data.id_note - 1) , 1);

    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.navigation.goBack()},
      ],
      {cancelable: false},
    );
  }


  render() {
    return (
      <Container>
 <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title><Text>detail note</Text></Title>
          </Body>
          <Right>
            <Button onPress={() => this.delete()} transparent>
              <Icon name='trash' />
            </Button>
          </Right>
        </Header>   
        
        <Content>
          <Card>
            <CardItem header>
              <Text>{this.state.data.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                {this.state.data.text}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>{this.state.data.category_name}</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
      kategoriP: state.reKategori.ListKategori.result
  }
}

export default connect(mapStateToProps)(Register)