import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Separator from '../../utils/Separator';
class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  //地址
  Address = () => {
    const {active} = this.props;
    return (
      <View
        style={{
          paddingHorizontal: 30,
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          {active == 4 ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/sy_jingxuanhaodian_shutiao.png')}
                style={{
                  width: 5,
                  height: 17,
                  marginRight: 5,
                }}
              />
              <Text>订单配送</Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginRight: 8,
                }}
                source={require('../../res/mipmap-mdpi/sy_shijian_icon.png')}
              />
              <Text
                style={{
                  marginRight: 8,
                  color: '#01AC73',
                }}>
                40分钟内
              </Text>
              <Text>送达</Text>
            </View>
          )}

          {active == 0 ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              {}
              <Text
                style={{
                  fontSize: 22,
                  color: '#FF6127',
                  marginRight: 5,
                }}>
                5.4
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#FF6127',
                }}>
                元
              </Text>
            </View>
          ) : (
            <></>
          )}

          {active > 0 && active < 4 ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,

                  marginRight: 5,
                }}>
                取餐号
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: '#FF6127',
                }}>
                4543
              </Text>
            </View>
          ) : (
            <></>
          )}
          {/* {active == 2 ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,

                  marginRight: 5,
                }}>
                取餐号
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: '#FF6127',
                }}>
                4543
              </Text>
            </View>
          ) : (
            <></>
          )} */}
        </View>
        <View
          style={{
            flexDirection: 'row',

            height: 110,
            paddingTop: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <Image
              source={require('../../res/mipmap-mdpi/qd_dp_icon.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text
              style={{
                flex: 1,
                width: 0,
                borderStyle: 'dashed',
                borderColor: '#BABABA',
                borderWidth: 0.3,
              }}></Text>
            <View style={{alignItems: 'center'}}>
              <Text style={{}}>5.2</Text>
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 12,
                }}>
                Km
              </Text>
            </View>
            <Text
              style={{
                flex: 1,
                width: 0,
                borderStyle: 'dashed',
                borderColor: '#BABABA',
                borderWidth: 0.3,
              }}></Text>
            <Image
              source={require('../../res/mipmap-mdpi/qd_ke_icon.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                }}>
                虾子大坝王炸海鲜旗舰店(世纪城店）
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 14, color: '#888', marginTop: 5}}>
                  成都市高新区世纪城2楼1804号
                </Text>
                {active > 0 ? (
                  <Image
                    source={require('../../res/mipmap-mdpi/dqh_dianhua_icon.png')}
                    style={{
                      width: 14,
                      height: 17,
                      marginLeft: 10,
                    }}
                  />
                ) : (
                  <></>
                )}
              </View>
            </View>
            <Text
              style={{
                fontSize: 18,
              }}>
              天府三街福年广场T1(1207）
            </Text>
          </View>

          <View
            style={{
              marginLeft: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../res/mipmap-mdpi/dp_daohang_icon.png')}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../res/mipmap-mdpi/dp_daohang_icon.png')}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {active > 0 ? (
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 40,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#888888',
              }}>
              王先生
            </Text>
            <Text
              style={{
                color: '#888888',
                marginHorizontal: 8,
              }}>
              135****5996
            </Text>
            <Image
              source={require('../../res/mipmap-mdpi/dqh_dianhua_icon.png')}
              style={{
                width: 14,
                height: 17,
              }}
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  };

  //商品
  Goods = () => {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../res/mipmap-mdpi/sy_jingxuanhaodian_shutiao.png')}
            style={{
              width: 5,
              height: 17,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontSize: 16,
            }}>
            商品清单
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <Text>蒜蓉小龙虾</Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginRight: 50,
              }}>
              x1
            </Text>
            <Text>¥ 80</Text>
          </View>
        </View>
              
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Text>实付</Text>
          <Text>¥ 110</Text>
        </View>
      </View>
    );
  };
  //订单信息
  OrderInfo = () => {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../res/mipmap-mdpi/sy_jingxuanhaodian_shutiao.png')}
            style={{
              width: 5,
              height: 17,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontSize: 16,
            }}>
            订单信息
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <Text>订单编号</Text>
          <Text>1356526794</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Text>期望送达时间</Text>
          <Text>2021-04-23 13:45:07</Text>
        </View>
      </View>
    );
  };
  //收入
  Income = () => {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../res/mipmap-mdpi/sy_jingxuanhaodian_shutiao.png')}
            style={{
              width: 5,
              height: 17,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontSize: 16,
            }}>
            订单配送收入
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <Text>配送费</Text>
          <Text>¥ 30</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Text>期望送达时间</Text>
          <Text>2021-04-23 13:45:07</Text>
        </View>
      </View>
    );
  };

  //配送期望时间
  RequireTime = () => {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
            }}>
            要求送达
          </Text>
          <Text
            style={{
              color: '#01AC73',
              fontSize: 17,
            }}>
            13:55前
          </Text>
        </View>
      </View>
    );
  };
  //过程
  Progress = () => {
    const {active, taked} = this.props;
    return (
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            {active > 0 ? (
              <Text
                style={{
                  fontSize: 17,
                }}>
                12:12
              </Text>
            ) : (
              <Text>--</Text>
            )}

            <Text>抢单</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            {active > 1 || taked ? (
              <Text
                style={{
                  fontSize: 17,
                }}>
                12:22
              </Text>
            ) : (
              <Text>--</Text>
            )}
            <Text>到店</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            {active > 2 ? (
              <Text
                style={{
                  fontSize: 17,
                }}>
                12:32
              </Text>
            ) : (
              <Text>--</Text>
            )}
            <Text>取货</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            {active > 3 ? (
              <Text
                style={{
                  fontSize: 17,
                }}>
                12:32
              </Text>
            ) : (
              <Text>--</Text>
            )}
            <Text>送达</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const {active} = this.props;
    return (
      <View>
        {this.Address()}
        <Separator></Separator>
        {this.Goods()}
        <Separator></Separator>
        {this.OrderInfo()}
        <Separator></Separator>
        {this.Income()}
        <Separator></Separator>
        {this.RequireTime()}
        <Separator></Separator>
        {this.Progress()}
      </View>
    );
  }
}

export default Index;
