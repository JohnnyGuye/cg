
/**
* Controller module, only module allowed to be called by the view
* Expose through this calls to the other modules
*/
let CGController = new function() {

  this.init = function() {

    CGDatabase.init( )
    CGUi.init( )
    CGLadder.init( )

    CGUi.changeAbscissa( CGLadder.abscissaType = "rank" )
    CGUi.changeOrdinate( CGLadder.ordinateType = "all" )

    CGUi.startSpin()

    CGLadder.fetchRankings(
            ranking => {
              CGUi.updateRanking( ranking )
              console.log( ranking)
            })
  }

  this.changeOrdinate = function( elem ) {
    CGLadder.ordinateType = elem.value
    CGUi.changeOrdinate( elem )
    CGUi.startSpin()
    CGLadder.fetchRankings(
            ranking => {
              CGUi.updateRanking( ranking )
              console.log( ranking)
            })
  }

  this.toggleSpecialization = function( elem ) {
    CGLadder.specializedRanking = elem.value
    CGLadder.fetchRankings(
            ranking => {
              CGUi.updateRanking( ranking )
              console.log( ranking)
            })
  }

  this.changeAbscissa = function( elem ) {
    CGLadder.abscissaType = elem.value
    CGUi.changeAbscissa( elem )
    CGUi.startSpin()
    CGUi.refreshGraph()
    CGUi.stopSpin()
  }

  this.changePage = function( elem ) {
    CGLadder.rankingPage = elem.value
    CGLadder.fetchRankings(
            ranking => {
              CGUi.updateRanking( ranking )
              console.log( ranking)
            })
  }
}

CGController.init()
console.log( CGUi, CGLadder, CGController)
