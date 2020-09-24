import 'chai/register-expect'
import chai, { use } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import mockdate from 'mockdate'

use(chaiAsPromised)
use(sinonChai)
chai.should()

before(() => mockdate.set('2020-09-21T15:00:00-03:00'))

after(() => mockdate.reset())
