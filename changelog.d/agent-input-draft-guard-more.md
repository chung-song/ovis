### Fixed
- A chat message is no longer pasted onto text typed into GJC's, Muse's, Qwen Code's, cline's or
  dsh-tui's own input box and sent along with it: the send is refused and the message stays in the
  composer. Their placeholders, a box the bridge cannot make out (Muse and dsh-tui with their command
  list open), and typed text drawn in a theme colour that was not recorded still send as before.
