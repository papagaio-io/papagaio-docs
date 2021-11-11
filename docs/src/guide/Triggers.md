# Triggers Configuration

Papagaio keeps synchronized information between Agola and the Git sources, in case of communication problems between the systems.

Here you can configure the time interval for three types of triggers. 

* Organizations: 

  Synchronize Organizations's projects and members with Agola and the Git source. If the Organizations is deleted in git it will be deleted on Agola. Papagaio recreates the organization on Agola if deleted. 

  This function also verify if a project has Agola's folder (.agola) to be added in the Dashboard. 

   Papagaio takes care if a webhook fails, this trigger fixes it.  

* Failed runs: 

  Updates info in the Dashboard.

  Send an e-mail to the person who executed the "push", to all the project owners and also to a list of external users
 
  Synchronizes with Agola : date, time duration and the url link of every last succeded/failed run of all branches in Papagaio.
  This trigger keeps the last 10 runs ordered by date to manage the e-mail sending. 

* User:

  Synchronizes all users in case their roles change or a user is deleted from the git source.

  If a user is a project owner is deleted in git, Papagaio assigns automaticaly another user to be owner to that organization.
  
  Refreshes access tokens (expiration)


This page can be edited only by an administrator

![Add Organization](../images/triggers.png "Add Organization")