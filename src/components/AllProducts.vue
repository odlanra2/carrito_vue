<template>
 <div>
    <listOfProducts :products="getAllProducts"/>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListofProducts';
export default {
  components: {
    listOfProducts,
  },
  computed: {
    ...mapGetters([
      'getAllProducts',
      'getcountproduct'
    ]),

    reversedMessage: function () {
      // `this` points to the vm instance
      return this.getcountproduct
    }
  },

   created () {
     for(var i=0;  i < this.getcountproduct.length ; i++ ){
               console.log(this.getcountproduct[i]);
     }          
   }
};

</script>