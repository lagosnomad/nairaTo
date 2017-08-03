angular.module('starter.services', [])
    .factory('getCurrentRatesService', function($http, $log, $q, $rootScope) {
        ENDPOINT = "http://127.0.0.1:8000";
        return {
            getCurrentRates: function() {
                var deferred = $q.defer();
                $http.get(ENDPOINT + '/api/rates')
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(msg, code) {
                        deferred.reject(msg);
                        $log.error(msg, code);
                    });
                return deferred.promise;
            }
        };
    })

.factory('getLoadingMessageService', function() {
    return {
        getLoadingMessage: function() {
            var lines = new Array(
                "locating the required gigapixels to render...",
                "spinning up the hamster...",
                "shovelling coal into the server...",
                "programming the flux capacitor...",
                "640k ought to be enough for anybody",
                "the architects are still drafting...",
                "the bits are breeding",
                "we're building the buildings as fast as we can",
                "would you prefer chicken, steak, or tofu?",
                "pay no attention to the man behind the curtain",
                "...and enjoy the elevator music",
                "...while the little elves draw your map",
                "a few bits tried to escape, but we caught them",
                "...and dream of faster computers",
                "would you like fries with that?",
                "checking the gravitational constant in your locale...",
                "go ahead -- hold your breath",
                "at least you're not on hold",
                "hum something loud while others stare",
                "you're not in kansas any more",
                "the server is powered by a lemon and two electrodes",
                "we love you just the way you are",
                "...while a larger software vendor in seattle takes over the world",
                "we're testing your patience ...",
                "...as if you had any other choice",
                "take a moment to think about last night",
                "don't think of purple hippos",
                "follow the white rabbit",
                "why don't you order a sandwich?",
                "...while the satellite moves into position",
                "the bits are flowing slowly today",
                "dig on the 'x' for buried treasure... arrr!",
                "it's still faster than you could draw it..."
            );
            return lines[Math.round(Math.random() * (lines.length - 1))];
        }
    };
})

.factory('getErrorMessageService', function() {
    return {
        getErrorMessage: function() {
            var lines = new Array(
                "the web site you seek lies beyond our perception but others await.",
                "sites you are seeking from your path they are fleeing their winter has come.",
                "a truth found, be told you are far from the fold, go come back yet again.",
                "wind catches lily scatt'ring petals to the wind: your site is not found.",
                "these three are certain: death, taxes, and site not found. you, victim of one.",
                "ephemeral site. i am the blue screen of death.no one hears your screams.",
                "aborted effort: the site, passed this veil of tears.you ask way too much.",
                "mourning and sorrow 404 not with us now lost to paradise ",
                "not a pretty sight when the web dies screaming loud the site is not found ",
                "site slips through fingers pulse pounding hard and frantic vanishing like mist.",
                "the dream is shattered the web site cannot be found inside the spring rain.",
                "bartender yells loud your site cannot be found, boy buy another drink.",
                "chrome megaphone barks it's not possible to talk not yet anyway.",
                "emptyness of soul forever aching blackness: blah.com not found.",
                "click exciting link gossamer threads hold you back 404 not found.",
                "with searching comes loss and the presence of absence:the site is not found.",
                "you step in the stream, but the water has moved on the site is not here.",
                "rather than a beep or a rude error message, these words: 'site not found.'",
                "something you entered transcended parameters.the site is unknown.",
                "stay the patient course of little worth is your ire the server is down.",
                "there is a chasm of carbon and silicon the server can 't bridge.",
                "chaos reigns within. reflect, repent, and retry.server shall return .",
                "won't you please observe a brief moment of silence for the dead server ? ",
                "first snow, then silence. this expensive server dies so beautifully.",
                "seeing my great fault through darkening dead servers i begin again.",
                "visit the home page. it can't be done easily when the site is down.",
                "cables have been cut southwest of northeast somewhere we are not amused.",
                "site is silent, yes no voices can be heard now the cows roll their eyes.",
                "silicon shudders the site is down for the count one big knockout punch.",
                "yesterday it worked, today it is not working, the web is like that.",
                "the ten thousand things how long do any persist? the file, not there.",
                "a file that big? it might be very useful but now it is gone.",
                "to have no errors would be life without meaning no struggle, no joy.",
                "errors have occurred. we won 't tell you where or why. lazy programmers.",
                "the code was willing. it considered your request, but the chips were weak.",
                "error reduces your expensive computer to a simple stone.",
                "server's poor response not quick enough for browser. timed out, plum blossom.",
                "login incorrect. only perfect spellers may enter this system."
            );
            return lines[Math.round(Math.random() * (lines.length - 1))];
        }
    };
});