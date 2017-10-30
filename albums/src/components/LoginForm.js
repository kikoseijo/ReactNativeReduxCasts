import React, { Component } from 'react';
import { Container, Header, Content, Icon, Button, Body, Title, Card, Label, Text, Form, Item, Input } from 'native-base';

export default class LoginForm extends Component {
    state = {
        uName: '',
        uPass: '',
    };
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Authenticate</Title>
                    </Body>
                </Header>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                      <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                      <Input />
                    </Item>
                </Form>

                <Button full large primary ref={(c) => this._button = c}>
                            <Text>Click Me</Text>
                          </Button>
              <Button bordered large primary>
                  <Icon name='lock' />
                  <Text>bordered large primary</Text>
              </Button>
              <Button rounded large primary>
                  <Icon name='lock' />
                  <Text>rounded large primary</Text>
              </Button>
              <Button block primary>
                  <Icon name='lock' />
                  <Text>block primary</Text>
              </Button>
              <Button full large primary>
                  <Icon name='lock' />
                  <Text>Log in</Text>
              </Button>
              <Button full large primary>
                  <Icon name='lock' />
                  <Text>Log in</Text>
              </Button>
              <Button full large primary>
                  <Icon name='lock' />
                  <Text>Log in</Text>
              </Button>
              <Button full large primary>
                  <Icon name='lock' />
                  <Text>Log in</Text>
              </Button>
              <Button full large primary>
                  <Icon name='lock' />
                  <Text>Log in</Text>
              </Button>
              <Button full large primary>
                  <Icon name='lock' />
                  <Text>Log in</Text>
              </Button>
              <Button full large primary>
                  <Icon name='lock' />
                  <Text>Log in</Text>
              </Button>
              <Button full large primary>
                  <Icon name='lock' />
                  <Text>Log in</Text>
              </Button>


            </Content>
            </Container>
        );
    }
}
