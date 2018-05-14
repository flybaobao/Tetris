<template>
  <div class="container" v-title="{'title': '帮助与反馈'}">
    <group>
      <group-title slot="title"><span style="font-size: 17px;">感谢您对约财的支持，我们期待您的宝贵意见</span></group-title>
      <x-textarea v-model="content" :max="500" :placeholder="'请输入您的反馈意见'" :show-counter="true" :height="200" :rows="8"
                  :cols="30"></x-textarea>
    </group>
    <group>
      <group-title slot="title"><span style="font-size: 17px;">联系方式</span></group-title>
      <x-input v-model="email" name="email" placeholder="请输入您的邮箱地址" :show-clear="false">
        <a v-show="email.length > 0" slot="right" style="display: inline-block; width: 25px; height: 25px; line-height: 25px;" @click="clearEmail">
          <icon type="clear" style="font-size: 20px;"></icon>
        </a>
      </x-input>
    </group>
    <div class="button-wrapper">
      <x-button text="确定" action-type="button" :style="{ 'background-color' :  '#c2a55f', color:'#ffffff' }"
                @click.native="onEvent"></x-button>
    </div>
  </div>
</template>

<script>
  import { XTextarea, Group, XInput, XButton, GroupTitle, Icon } from 'vux'

  export default {
    data () {
      return {
        content: '',
        email: '',
      }
    },
    components: {
      'x-textarea': XTextarea,
      'group': Group,
      'x-input': XInput,
      'x-button': XButton,
      'group-title': GroupTitle,
      'icon': Icon
    },
    methods: {
      clearEmail() {
        this.email = "";
      },
      alreadySubmit() {
        var contentAlready = this.content.length > 0;
        var emailAlready = true;
        if (this.email.length > 0) {
          var emailReg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
          emailAlready = emailReg.test(this.email);
        } else {
          emailAlready = true
        }
        return contentAlready && emailAlready;
      },
      onEvent (event) {

        if (this.content.length == 0) {
          this.nativeEvents.show_toast("内容不能为空");
          return;
        }

        if (this.email.length > 0) {
          var emailReg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
          if (!emailReg.test(this.email)) {
            this.nativeEvents.show_toast("邮箱格式错误");
            return;
          }
        }

        var params = {
          'content': this.content,
          'contact': this.email,
        }
        var that = this
        this.request(this.apis.feedback, params, function () {
          that.nativeEvents.show_toast("谢谢您的反馈!");
          setTimeout(() => {
            that.nativeEvents.nativego_back();
          }, 1500)

        }, function () {
          that.nativeEvents.show_toast("提交出错");
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .button-wrapper
    margin-top: 40px
    padding: 0 10px
</style>
