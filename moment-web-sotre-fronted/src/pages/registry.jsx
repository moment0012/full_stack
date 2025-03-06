import {
    LoginForm,
    ProFormText
} from '@ant-design/pro-components'
import {
    UserOutlined

} from '@ant-design/icons'
import { useRef } from 'react';
import { Tabs } from 'antd';
const Registry = () => {


    return (
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
            <LoginForm
                logo="https://github.githubassets.com/favicons/favicon.png"
                title="数字门店管理平台"
                subTitle="注册新用户"

                rememberMe={true}
                onSubmit={() => { }}
            >

                <>
                    <Tabs
                        centered
                        accessKey='registry'
                    >
                        <Tabs.TabPane tab={'用户注册'} key="registry"></Tabs.TabPane>

                    </Tabs>
                    <>
                        <ProFormText
                            name="username"
                            fieldProps={{
                                size: 'large',
                                prefix: <UserOutlined className='{prefixIcon' />
                            }}
                            placeholder={'请输入账号/用户名'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入账号/用户名!'
                                }
                            ]}
                        />


                    </>

                </>
            </LoginForm>
        </div>
    )
}

export default Registry;