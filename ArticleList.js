import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';
import Qiita from 'qiita-js';
import {QIITA_API_TOKEN} from './Secrets';
Qiita.setEndpoint("https://qiita.com");
Qiita.setToken(QIITA_API_TOKEN);

if (!QIITA_API_TOKEN) {
  throw new Error("QIITA_API_TOKEN must be set in Secrets.js");
}

class ArticleList extends Component {

  constructor(props) {
    super(props);
    this._prefetchArticles();
    this.state = {isLoading: true};
  }

  _prefetchArticles = () => {
    Qiita.Resources.Item.list_items().then((items) => {
      this.setState({isLoading: false, articles: items});
    });
  };

  _keyExtractor = (article) => {
    return article.id;
  }

  _renderItem = (article) => {
    return (
      <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('Details', {article: article})}>
        <View style={styles.listItem}>
          <Image
            style={styles.icon}
            source={{uri: article.item.user.profile_image_url}}
          />
          <View style={{flex: 1}}>
            <Text style={styles.title}>
               {article.item.title}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading && <ActivityIndicator size={'large'} />}
        {!this.state.isLoading && <FlatList
          style={{width: '100%'}}
          data={this.state.articles}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 12,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1
  },
  icon: {
    width: 48,
    height: 48
  },
  title: {
    padding: 8,
    flexWrap: 'wrap'
  }
});

export default ArticleList;
