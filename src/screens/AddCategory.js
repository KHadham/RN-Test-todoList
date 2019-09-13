import React, { Component } from 'react'
import { Image, StyleSheet, ScrollView,Alert } from 'react-native'
import { Form, Item, Container, Input, Button, Text, Header, Left, Body, Right, Title, Subtitle, Icon, Picker, Label, View } from 'native-base'
import ImagePicker from 'react-native-image-picker'

// import redux
import { connect } from 'react-redux'
import { getColor,postKategori } from '../public/redux/actions/kategori'

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: '',
            category_name:'',
            image: '',
            selected: undefined,
            kategoriS:[]
        }
    }

    componentDidMount = async () => {
			await this.props.dispatch( getColor() )
			this.setState({	kategoriS: this.props.kategoriP })
		}
		

    handleChoosePhoto = () => {
			const options = { noData: true,}

			ImagePicker.launchImageLibrary(options, response => {
				if (response.uri) {
					this.setState({ image: response })
				}
			})
    }

    Post =() => {
      var color = this.state.color
      var category_name = this.state.category_name
      var icon = this.state.icon
      
      var data = {
        category_name,color
      }

      this.props.dispatch(postKategori(data))

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
          {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
        ],
        {cancelable: false},
      );
     
      
    }

    render() {
			
    console.log('id', this.state.color)
    console.log('id', this.state.image)
    console.log('id', this.state.category_name)

      return (
        <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add kategori</Title>
            <Subtitle>Add kategori juga</Subtitle>
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
              <Item regular>
                <Input style={{  color: 'black' }} onChangeText={category_name => this.setState({ category_name: category_name })} placeholder="category_name" placeholderTextColor="black" />
              </Item>
              <Item regular style={{ marginTop: 10 }}>
								<Picker
									mode="dropdown"
									placeholder="Pilih kategori..."
									placeholderStyle="black"
									placeholderIconColor="black"
									style={{ paddingLeft: 20, color: 'black' }}
									selectedValue={this.state.color}
									onValueChange={(selected) => {
                    this.setState({
                        color: selected
                    })
									}}
							  >
									{
										this.state.kategoriS.map(item => (
													<Picker.Item label={item.color_name + ' colour'} value={item.id_color} />
											))
									}
								</Picker>
              </Item>
              {
                this.state.image != null ?
                <>
                <Button  style={{ marginTop: 10 }} success onPress={this.handleChoosePhoto}>
                  <Text style={{ textAlign: 'center', width: '100%' }}>change Image</Text>
                </Button>
                  <Image style={styles.staticImage} source={this.state.image}/>
                </>
                : 
                <Button  style={{ marginTop: 10 }} success onPress={this.handleChoosePhoto}>
                  <Text style={{ textAlign: 'center', width: '100%' }}>Choose Image</Text>
                </Button>
              }
              
              
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
