<template>
  <div class="wrapper">
    <ul class="content">
      <li>元素内容1</li>
      <li>元素内容2</li>
      <li>元素内容3</li>
      <li>元素内容4</li>
      <li>元素内容5</li>
      <li>元素内容6</li>
      <li>元素内容7</li>
      <li>元素内容8</li>
      <li>元素内容9</li>
      <li>元素内容10</li>
      <li>元素内容11</li>
      <li>元素内容12</li>
      <li>元素内容13</li>
      <li>元素内容14</li>
      <li>元素内容15</li>
      <li>元素内容16</li>
      <li>元素内容17</li>
      <li>元素内容18</li>
      <li>元素内容19</li>
      <li>元素内容20</li>
      <li>元素内容21</li>
      <li>元素内容22</li>
      <li>元素内容23</li>
      <li>元素内容24</li>
      <li>元素内容25</li>
      <li>元素内容26</li>
      <li>元素内容27</li>
      <li>元素内容28</li>
      <li>元素内容29</li>
      <li>元素内容30</li>
      <li>元素内容31</li>
      <li>元素内容32</li>
      <li>元素内容33</li>
      <li>元素内容34</li>
      <li>元素内容35</li>
      <li>元素内容36</li>
      <li>元素内容37</li>
      <li>元素内容38</li>
      <li>元素内容39</li>
      <li>元素内容40</li>
      <li>元素内容41</li>
      <li>元素内容42</li>
      <li>元素内容43</li>
      <li>元素内容44</li>
      <li>元素内容45</li>
      <li>元素内容46</li>
      <li>元素内容47</li>
      <li>元素内容48</li>
      <li>元素内容49</li>
      <li>元素内容50</li>
      <li>元素内容51</li>
      <li>元素内容52</li>
      <li>元素内容53</li>
      <li>元素内容54</li>
      <li>元素内容55</li>
      <li>元素内容56</li>
      <li>元素内容57</li>
      <li>元素内容58</li>
      <li>元素内容59</li>
      <li>元素内容60</li>
      <li>元素内容61</li>
      <li>元素内容62</li>
      <li>元素内容63</li>
      <li>元素内容64</li>
      <li>元素内容65</li>
      <li>元素内容66</li>
      <li>元素内容67</li>
      <li>元素内容68</li>
      <li>元素内容69</li>
      <li>元素内容70</li>
      <li>元素内容71</li>
      <li>元素内容72</li>
      <li>元素内容73</li>
      <li>元素内容74</li>
      <li>元素内容75</li>
      <li>元素内容76</li>
      <li>元素内容77</li>
      <li>元素内容78</li>
      <li>元素内容79</li>
      <li>元素内容80</li>
      <li>元素内容81</li>
      <li>元素内容82</li>
      <li>元素内容83</li>
      <li>元素内容84</li>
      <li>元素内容85</li>
      <li>元素内容86</li>
      <li>元素内容87</li>
      <li>元素内容88</li>
      <li>元素内容89</li>
      <li>元素内容90</li>
      <li>元素内容91</li>
      <li>元素内容92</li>
      <li>元素内容93</li>
      <li>元素内容94</li>
      <li>元素内容95</li>
      <li>元素内容96</li>
      <li>元素内容97</li>
      <li>元素内容98</li>
      <li>元素内容99</li>
      <li>元素内容100</li>
    </ul>
  </div>
</template>
<script>
  import BSscroll from "better-scroll"

  export default {
    name: "category",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BSscroll('.wrapper', {
        probeType: 3,
        click: true,
        pullUpLoad: true
      })
      this.scroll.on('scroll', position => {
        // console.log(position);
      })
      this.scroll.on('pullingUp', () => {
        console.log('加载更多');
      })
    }
  }
</script>
<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
  }
</style>