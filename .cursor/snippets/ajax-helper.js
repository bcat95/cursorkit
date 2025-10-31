// Simple Ajax helper with retry (DNS/transient safe-ish)
function ajaxWithRetry(opts, retries){
  retries = retries || 2;
  return $.ajax(opts).fail(function(err){
    if(retries > 0){
      return ajaxWithRetry(opts, retries - 1);
    }
    throw err;
  });
}
