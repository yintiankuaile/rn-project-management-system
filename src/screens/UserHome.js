import React from "react";
import { Text } from "react-native";
import { NavigationBar, Title, ImageBackground, Tile, Subtitle, Divider, Screen, Button, View } from '@shoutem/ui';
import { Query } from 'react-apollo';

import gql from '../gql';
export default class UserHome extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            filters: [
                { name: '全部', value: '全部' },
                { name: '我的', value: '我的' },
            ],
        }
    }

    renderRow = (data) => {
        return (
            <View>
                <ImageBackground
                    styleName="large-banner"
                    source={{ uri: "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" }}
                >
                    {
                        data.length !== 0 ? <Tile>
                            <Title styleName="md-gutter-bottom">{data.name}</Title>
                            <Subtitle styleName="sm-gutter-horizontal">{data.description}</Subtitle>
                        </Tile> : null
                    }
                </ImageBackground>
                <Divider styleName="line" />
            </View>
        );
    }

    render() {
        return (
            <Screen style={{ marginTop: 32 }} >
                <NavigationBar
                    centerComponent={<Title>我的</Title>}
                    styleName="inline"
                />
                <ImageBackground
                    styleName="large-banner"
                    source={{ uri: "https://i.loli.net/2019/03/22/5c948bca62fc7.jpg" }}
                >
                    <View>
                        <Button
                            style={{ width: 150, height: 50 }}
                        >
                            <Text>login</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Screen>
        );
    }
}