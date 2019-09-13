import React, { Component } from 'react'
import { TouchableOpacity, Image, View, AsyncStorage as storage, ActivityIndicator, StyleSheet, FlatList, RefreshControl } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { Button, Item, Card, CardItem, Icon, Fab, Text, Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import DonateBook from './AddNote'
import Data from '../Data/Note'

//import redux
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
			super(props)
      this.initData = Data;
      
			this.state = {
        data: this.initData,
				isLoading: false,
				noteS: [],
				iduser: '',
        name: '',
        refreshing: false,

			}
    }

    pullDownRefresh =  () => {
        this.setState({ isLoading: true })
        setTimeout(() => {
          this.setState({data: Data, isLoading: false })
        }, 500)
        
      }

    _onRefresh = () => {
      this.setState({refreshing: true});
      fetchData().then(() => {
        this.setState({refreshing: false});
      });
    }

    render() {
			console.log('object', this.state.noteS)
        return (
					<Container >
          
					<Header>
						<Left>
							<Button transparent>
								<Icon name='person' />
							</Button>
						</Left>
						<Body>
							<Title>Title</Title>
							<Subtitle>Subtitle</Subtitle>
						</Body>
						<Right>
            <Button transparent>
              <Icon name='funnel' />
            </Button>
          </Right>
					</Header>
						<View style={styles.FlatList}>
            <FlatList
              refreshing={this.state.isLoading}
							onRefresh={this.pullDownRefresh}
              data={this.state.data}
              numColumns={2}
              keyExtractor={item => item.id_item}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('Detail', { data: item })} >
                  <Card style={{width:170}}>
										<CardItem style={{backgroundColor:`${item.color}`}} header>
											<Text>{item.title}</Text>
										</CardItem>
										<CardItem style={{backgroundColor:`${item.color}`}}>
											<Body>
												<Text>
													{item.text}
												</Text>
											</Body>
										</CardItem>
										<CardItem style={{backgroundColor:`${item.color}`}} footer>
											<Text> {item.category_name}</Text>
										</CardItem>
								</Card>
                </TouchableOpacity>
                );
              }}
            />
          </View>

						<Fab	style={{ backgroundColor: '#5067FF' }}	onPress={() => this.props.navigation.navigate('AddNote')}>
							<Icon name="add" />
						</Fab>
					</Container>
        )
    }
}
const mapStateToProps = state => {
	return {
			noteP: state.reNote.ListNote.result,
	}
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 60
  },
  text: {
    fontSize: 30
  },
  Borrowed: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    paddingTop: 2,
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    width: 60,
    height: 20,
    marginTop: 192
  },

  image: {
    width: 170,
    height: 211,
    borderRadius: 10
  },

  searchBar: {
    zIndex: 1,
    backgroundColor: "#fff",
    borderBottomColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    marginTop: 15,
    alignSelf: "center",
    marginRight: 0,
    height: 38,
    width: 307,
    position: "absolute",
    borderRadius: 20
  },
  FlatList: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  item: {
    backgroundColor: "black",
    margin: 15,
    borderRadius: 8,
    elevation: 6,
    width: 145,
    height: 215
  }
});
