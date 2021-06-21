import React, { Component } from 'react';
import {
    View,
    Modal,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
export default class ModalTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            
        }
    }
    //是否显示模态框
    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        })
    };
    //是否勾选单选框
    
    render() {
        const { Checked } = this.state
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffaaff'
            }}>
                <TouchableOpacity onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>显示 Modal</Text>
                </TouchableOpacity>
                <Modal animationType={'none'}
                    transparent={true}
                    // visible={this.state.modalVisible}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ffaaff'
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#7f7f7f',
                    }}>
                        <View style={{
                            width: 278,
                            height: 108,
                            borderRadius: 14,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'left',
                                color: '#3f3c3c',
                            }}>该订单已取消</Text>
                        </View>
                    </View>
                </Modal>
            </View >
        )
    }
}