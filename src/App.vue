<template>
  <div id="app">
    <header class="container-fluid hidden-sm hidden-xs">
      <div class="row">
        <div class="app col-md-2">
          <a href="javascript:;" class="wjsPhone"><span class="glyphicon glyphicon-phone"></span>手机微金所</a><span class="glyphicon glyphicon-chevron-down"></span>
        </div>
        <div class="severPhone col-md-5">
          <span class="glyphicon glyphicon-phone-alt"></span><a href="javascript:;">4006-89-4006（服务时间：9:00-21:00)</a>
        </div>
        <div class="issue col-md-2">
          <a href="javascript:;">常见问题</a>
          <a href="javascript:;">财富登录</a>
        </div>
        <div class="login col-md-3">
          <button type="button" class="btn btn-danger">免费注册</button>
          <a href="javascript:;">登录</a>
        </div>
      </div>
    </header>
    <nav class="navbar navbar-default">
      <div class="container ">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand " href="#">
            <span class="wjsfont wjsfont-logo"></span>
            <span class="wjsfont wjsfont-name"></span>
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav ">
            <li><a href="javascript:;">我要投资</a></li>
            <li><a href="javascript:;">我要借贷</a></li>
            <li><a href="javascript:;">平台介绍</a></li>
            <li><a href="javascript:;">新手专区</a></li>
            <li><a href="javascript:;">最新动态</a></li>
            <li><a href="javascript:;">微平台</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
        <a href="javascript:;" class="self_center   hidden-sm hidden-xs">个人中心</a>
      </div><!-- /.container-fluid -->
    </nav>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
@import "./assets/css/base";
</style>
