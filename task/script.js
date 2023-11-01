let timer=10;
        let time = document.getElementById('display');
        setTimeout(() => {
            time.innerHTML = timer--;
            
            setTimeout(() => {
                time.className = "badge rounded-pill bg-primary text-dark";
                time.innerHTML = timer--;

                setTimeout(() => {
                    time.className = "badge rounded-pill bg-secondary";
                    time.innerHTML = timer--;

                    setTimeout(() => {
                        time.className = "badge rounded-pill bg-primary text-dark";
                        time.innerHTML = timer--;

                        setTimeout(() => {
                            time.className = "badge rounded-pill bg-secondary";
                            time.innerHTML = timer--;

                            setTimeout(() => {
                                time.className = "badge rounded-pill bg-primary text-dark";
                                time.innerHTML = timer--;

                                setTimeout(() => {
                                    time.className = "badge rounded-pill bg-secondary";
                                    time.innerHTML = timer--;

                                    setTimeout(() => {
                                        time.className = "badge rounded-pill bg-primary text-dark";
                                        time.innerHTML = timer--;

                                        setTimeout(() => {
                                            time.className = "badge rounded-pill bg-warning";
                                            time.innerHTML = timer--;

                                            setTimeout(() => {
                                                time.className = "badge rounded-pill bg-danger text-dark";
                                                time.innerHTML = timer--;

                                                setTimeout(() => {
                                                    time.className = "badge rounded-pill bg-success";
                                                    time.innerHTML = "Happy Independance Day"
                                                    
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000); 