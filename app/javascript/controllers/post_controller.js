import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="post"
export default class extends Controller {
  connect() {
    console.log('js connected');
    $(document).ready(function() {
      $('input[type="checkbox"]').change(function() {
        console.log('1');
        performSearch();
      });
  
      function performSearch() {
        var selectedStatuses = $('input[name="post_type[]"]:checked').map(function() {
          return $(this).val();
        }).get();
        console.log('selectedStatuses', selectedStatuses);
        $.ajax({
          url: '/posts/count_post', // Điều chỉnh URL tùy theo đường dẫn của bạn
          type: 'GET',
          data: {
            post_type: selectedStatuses
          },
          dataType: 'script'
        }).done(function (data) {
          console.log('data', data);
        });
      }
    });
  }
}
