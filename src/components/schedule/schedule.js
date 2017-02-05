import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  View,
  Text
} from 'react-native';

import lessonStyles from '../../../src/styles/lesson';
import daysStyles from '../../../src/styles/days';

class Schedule extends Component {
  render() {
    return (
      <ScrollView style={daysStyles.days}>
        <View style={daysStyles.days__item}>
          <View style={daysStyles.days__title}>
            <Text style={daysStyles.days__text}>Вівторок</Text>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>1</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>2</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>3</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={daysStyles.days__item}>
          <View style={daysStyles.days__title}>
            <Text style={daysStyles.days__text}>Середа</Text>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>1</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>2</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>3</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={daysStyles.days__item}>
          <View style={daysStyles.days__title}>
            <Text style={daysStyles.days__text}>Середа</Text>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>1</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>2</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
          <View style={lessonStyles.lesson}>
            <View style={lessonStyles.lesson__wrapper}>
              <View style={lessonStyles.lesson__number}>
                <Text style={lessonStyles.lesson__current}>3</Text>
              </View>
              <View style={lessonStyles.lesson__info}>
                <View style={lessonStyles.lesson__wrapper}>
                  <Text style={lessonStyles.lesson__title}>
                    Технологія розподілених систем та паралельних обчислень
                  </Text>
                  <Text style={lessonStyles.lesson__type}>Лек</Text>
                </View>
                <View style={lessonStyles.lesson__wrapperCenter}>
                  <Text style={lessonStyles.lesson__location}>5-13</Text>
                  <Text style={lessonStyles.lesson__time}>10:25</Text>
                </View>
                <Text style={lessonStyles.lesson__lector}>доц. Гордієнко Ю. Г.</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('SKClient', () => Schedule);

export default Schedule;
