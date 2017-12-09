import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  WebView,
  View
} from 'react-native';
import { MarkdownView } from 'react-native-markdown-view'

class ArticleDetails extends Component {

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <MarkdownView>
            {params.article.item.body}
          </MarkdownView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ArticleDetails;
