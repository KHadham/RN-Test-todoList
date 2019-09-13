import React, { Component } from 'react'
import { Alert, StyleSheet, ScrollView } from 'react-native'
import { Form, Item, Header, Left, Body, Right, Title, Subtitle, Input, Button, Text, Icon, Label, Container, Toast, Row, Picker, Textarea, View } from 'native-base'

// import redux
import { connect } from 'react-redux'
import { getKategory } from '../public/redux/actions/kategori'
import { postNote } from '../public/redux/actions/note'
import Data from '../Data/Note'
import DataKategori from '../Data/Kategori'


class Register extends Component {

    constructor(props) {
        super(props)
        this.initData = Data;

        this.state = {
            data: this.initData,
            text: '',
            title:'',
            id_color: '',
            selected: undefined,
            kategoriS:DataKategori
        }
    }

		
    Post =() => {
      var text = this.state.text
      var title = this.state.title
      var color = this.state.id_color.id_color
      var category_name = this.state.id_color.category_name


      var data = {
        text,title,color,category_name
      }

      Data.push(data)

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
      console.log("text",Data)
      console.log("title",this.state.title)
      console.log("id_color",this.state.id_color)
      return (
        <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add note</Title>
            <Subtitle>Add note juga</Subtitle>
          </Body>
          <Right>
            <Button onPress={() => this.Post()} transparent>
              <Icon name='checkmark-circle-outline' />
            </Button>
          </Right>
        </Header>
      
        <View style={styles.root} >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Form style={{ marginHorizontal: 20, marginVertical: 20 }}>
              <Item  regular>
              
                <Input style={{  color: 'black' }} onChangeText={title => this.setState({ title: title })} placeholder=" add title" />
              </Item>

              <Textarea style={{ marginTop: 10 }} onChangeText={text => this.setState({ text: text })} rowSpan={12} bordered placeholder=" add deskripsion" />

              <Item regular style={{ marginTop: 10 }}>
								<Picker
									mode="dropdown"
									placeholder="Pilih kategori..."
									placeholderStyle="black"
									placeholderIconColor="black"
									style={{ paddingLeft: 20, color: 'black' }}
									selectedValue={this.state.id_color}
									onValueChange={(selected) => {
                    this.setState({
                        id_color: selected
                    })
									}}
							  >
									{
										this.state.kategoriS.map(item => (
													<Picker.Item label={'category ' + item.category_name } value={item} />
											))
									}
								</Picker>
              </Item>

              <Button  style={{ marginTop: 10,backgroundColor:'white' }} >
                <Text style={{ width: '100%', textAlign: 'center', }}></Text>
              </Button>
            </Form>
          </ScrollView>
        </View>
        </Container>
      )
    }
}

const mapStateToProps = state => {
    return {
        kategoriP: state.reKategori.ListKategori.result
    }
}

export default connect(mapStateToProps)(Register)
const styles = StyleSheet.create({
  root:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  staticImage:{
    width: "100%",
    height:200,
    marginTop: 10,
		justifyContent: 'center',
    alignItems: 'center',
  }
})
